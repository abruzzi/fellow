import { Avatar, Button, Textarea } from "@nextui-org/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import React, {
  ChangeEvent,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  graphql,
  useMutation,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";

import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CommentsQuery } from "./queries/CommentsQuery.tsx";
import { CommentsMutation } from "./__generated__/CommentsMutation.graphql.ts";
import { CommentsQuery as CommentsQueryType } from "./queries/__generated__/CommentsQuery.graphql.ts";
import { CommentSkeleton } from "./skeletons/CommentSkeleton.tsx";

const Comments = ({ cardId }: { cardId: string }) => {
  const [comment, setComment] = useState("");

  const [queryRef, loadQuery] =
    useQueryLoader<CommentsQueryType>(CommentsQuery);

  const refreshComments = useCallback(
    (cardId: string) => {
      loadQuery({ cardId }, { fetchPolicy: "store-and-network" });
    },
    [loadQuery],
  );

  useEffect(() => {
    if (!queryRef) {
      refreshComments(cardId);
    }
  }, [queryRef, refreshComments, cardId]);

  const [addComment, isAddingComment] = useMutation<CommentsMutation>(graphql`
    mutation CommentsMutation($cardId: ID!, $content: String!) {
      addCommentToCard(cardId: $cardId, content: $content) {
        id
        content
      }
    }
  `);

  const handleAddComment = () => {
    if (!comment) {
      return;
    }

    addComment({
      variables: {
        cardId: cardId,
        content: comment,
      },
      onCompleted: () => {
        refreshComments(cardId);
        setComment("");
      },
    });
  };

  const onCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <h4 className="font-bold text-slate-600">Comments</h4>

      <div className="flex flex-row items-start gap-2 mt-4 mb-8">
        <Avatar
          className="w-8 h-8 flex-grow-0 flex-shrink-0"
          color="default"
          name="Juntao"
          size="sm"
        />
        <div className="flex flex-col flex-grow gap-2">
          <Textarea
            label="Comment"
            endContent={<HiOutlineMenuAlt2 />}
            value={comment}
            onChange={onCommentChange}
            radius="sm"
            minRows={1}
          />
          <Button
            onPress={handleAddComment}
            disabled={isAddingComment || comment.trim().length === 0}
            className="mr-auto"
            size="sm"
            color={comment.trim().length === 0 ? "default" : "primary"}
          >
            Save
          </Button>
        </div>
      </div>

      <Suspense fallback={<CommentSkeleton />}>
        {queryRef ? <CommentList queryRef={queryRef} /> : null}
      </Suspense>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CommentList = ({ queryRef }) => {
  const data = usePreloadedQuery<CommentsQueryType>(CommentsQuery, queryRef);
  return (
    <div className="flex flex-col gap-6">
      {data.comments.map((comment) => (
        <div className="flex flex-row items-start gap-2" key={comment.id}>
          <Avatar
            className="w-8 h-8 flex-shrink-0"
            color="default"
            name={comment.user.name}
            size="sm"
          />
          <div className="flex-1 flex-grow flex-shrink-0 gap-2">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">{comment.user.name}</p>
              <p className="text-xs text-slate-600">
                {format(new Date(parseInt(comment.updatedAt)), "PPpp")}
              </p>
            </div>
            <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {comment.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Comments };

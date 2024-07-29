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

import { CommentsQuery } from "./queries/CommentsQuery.tsx";
import { CommentsMutation } from "./__generated__/CommentsMutation.graphql.ts";
import { CommentsQuery as CommentsQueryType } from "./queries/__generated__/CommentsQuery.graphql.ts";

const Comments = ({ cardId }: { cardId: string }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const [queryRef, loadQuery] =
    useQueryLoader<CommentsQueryType>(CommentsQuery);

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
      onCompleted: (response) => {
        const { id, content } = response.addCommentToCard;
        setComments([{ id, content }, ...comments]);
        setComment(undefined);
      },
    });
  };

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

  const onCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <h4 className="font-bold text-slate-600">Comments</h4>
      <div className="flex flex-row items-start gap-2">
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
            radius="none"
          />
          <Button
            onPress={handleAddComment}
            disabled={isAddingComment}
            className="mr-auto"
            size="sm"
          >
            Add comment
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CommentList queryRef={queryRef} />
      </Suspense>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CommentList = ({ queryRef }) => {
  const data = usePreloadedQuery<CommentsQueryType>(CommentsQuery, queryRef);

  return (
    <>
      {data.comments.map((comment) => {
        return (
          <div key={comment.id} className="flex flex-col">
            <div className="flex flex-row items-start gap-2">
              <Avatar
                className="w-8 h-8 flex-grow flex-shrink-0"
                color="default"
                name={comment.user.name}
                size="sm"
              />
              <p className="w-full flex-grow flex-shrink-0">
                {comment.content}
              </p>
            </div>
            <span>{comment.updatedAt}</span>
          </div>
        );
      })}
    </>
  );
};

export { Comments };

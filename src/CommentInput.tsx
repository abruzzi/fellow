import { useCurrentUser } from "./UserContext.tsx";
import React, { ChangeEvent, useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import { Avatar, Button, Textarea } from "@nextui-org/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CommentInputFragment$key } from "./__generated__/CommentInputFragment.graphql.ts";

const CommentInputFragment = graphql`
  fragment CommentInputFragment on Card {
    id
  }
`;

export const CommentInput = ({ card }: { card: CommentInputFragment$key }) => {
  const data = useFragment(CommentInputFragment, card);
  // const { currentUser } = useCurrentUser();

  const [comment, setComment] = useState("");
  const [addComment, isAddingComment] = useMutation(graphql`
    mutation CommentInputMutation($cardId: ID!, $content: String!) {
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
        cardId: data.id,
        content: comment,
      },
      onCompleted: () => {
        setComment("");
      },
    });
  };

  const onCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-row items-start gap-2 mt-4 mb-8">
      {/*<Avatar*/}
      {/*  className="w-8 h-8 flex-grow-0 flex-shrink-0"*/}
      {/*  color="default"*/}
      {/*  src={currentUser.avatarUrl}*/}
      {/*  name={currentUser.name}*/}
      {/*  size="sm"*/}
      {/*/>*/}
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
  );
};

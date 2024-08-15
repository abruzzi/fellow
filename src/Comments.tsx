import { Button, Spinner } from "@nextui-org/react";
import React, { useTransition } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { CommentInput } from "./CommentInput.tsx";
import { Comment } from "./Comment.tsx";
import { CardCommentsPaginationQuery } from "./__generated__/CardCommentsPaginationQuery.graphql.ts";
import { CommentsFragment$key } from "./__generated__/CommentsFragment.graphql.ts";

const CommentsFragment = graphql`
  fragment CommentsFragment on Card
  @refetchable(queryName: "CardCommentsPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(first: $count, after: $cursor)
      @connection(key: "CommentsFragment_comments") {
      edges {
        node {
          id
          ...CommentFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    ...CommentInputFragment
  }
`;

const Comments = ({ card }: { card: CommentsFragment$key }) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment<
    CardCommentsPaginationQuery,
    CommentsFragment$key
  >(CommentsFragment, card);

  const onLoadMore = () => {
    startTransition(() => {
      loadNext(3);
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <h4 className="font-bold text-slate-600">Comments</h4>

      <CommentInput card={data} />

      <div className="flex flex-col gap-6">
        {data.comments.edges.map((edge) => (
          <Comment key={edge.node.id} comment={edge.node} />
        ))}
      </div>

      {data.comments.pageInfo.hasNextPage && (
        <Button onClick={onLoadMore} disabled={isPending} />
      )}

      {isPending && <Spinner />}
    </div>
  );
};

export { Comments };

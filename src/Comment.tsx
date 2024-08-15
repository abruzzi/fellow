import { graphql, useFragment } from "react-relay";
import { Avatar } from "@nextui-org/react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { CommentFragment$key } from "./__generated__/CommentFragment.graphql.ts";

const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    id
    content
    updatedAt
    user {
      id
      name
      avatarUrl
    }
  }
`;

const Comment = ({ comment }: { comment: CommentFragment$key }) => {
  const data = useFragment(CommentFragment, comment);

  return (
    <div className="flex flex-row items-start gap-2">
      <Avatar
        className="w-8 h-8 flex-shrink-0"
        color="default"
        name={data.user.name}
        src={data.user.avatarUrl}
        size="sm"
      />
      <div className="flex-1 flex-grow flex-shrink-0 gap-2">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-bold">{data.user.name}</p>
          <p className="text-xs text-slate-600">
            {format(new Date(parseInt(data.updatedAt)), "PPpp")}
          </p>
        </div>
        <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export { Comment };

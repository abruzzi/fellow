const Header = ({ title }: { title: string }) => {
  return (
    <h1 className={`text-4xl text-slate-800 font-bold font-mono my-8`}>
      {title}
    </h1>
  );
};

export { Header };

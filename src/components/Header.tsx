const Header = ({ title }: { title: string }) => {
  return (
    <h1 className={`text-xl text-slate-800 font-bold font-mono py-2`}>
      {title}
    </h1>
  );
};

export { Header };

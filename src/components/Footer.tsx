const Footer = () => {
  return (
    <footer className="font-satoshi-medium text-sm text-black/50 lg:px-24 md:text-lg m-auto lg:mt-20 border-t border-zinc-200/60 grid grid-cols-2 divide-x divide-zinc-200/60 leading-none">
      <div className="w-full text-center p-6">
        <p className="">© 2024 Craft</p>
      </div>
      <div className="w-full text-center p-6">
        <p>
          Created by{" "}
          <a
            href="https://github.com/Jeff-Maina"
            target="_blank"
            className="text-black underline"
          >
            Jeff
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

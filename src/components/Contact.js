const Contact = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            Connect With Us
          </h2>
          <div>
            <p className="block text-sm font-medium leading-6 text-gray-900">
              Email address :
            </p>
            <div className="mt-2">
              <p>2002karanmandhare@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-2">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Phone :
              </p>
            </div>
            <div className="mt-2">
              <p>8857951153</p>
            </div>
            <h1 className="mt-6 text-xs">&copy;karanmandhare</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

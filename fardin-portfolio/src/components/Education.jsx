const Education = () => {
  return (
    <section id="education" className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-primary">Education</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Educational Qualification
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-4xl border border-base-300 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Diploma / CSE Background</h3>
            <p className="mt-2 text-gray-600">
              Computer Science related education and programming practice.
            </p>
          </div>

          <div className="rounded-4xl border border-base-300 p-6 shadow-sm">
            <h3 className="text-xl font-bold">HSC / Previous Education</h3>
            <p className="mt-2 text-gray-600">
              Completed higher secondary education with interest in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

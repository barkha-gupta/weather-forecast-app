const TempUnitToggle = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <span className="font-medium text-primary-text pr-1">C&deg;</span>
      <div className="relative w-14 h-8 bg-secondary-text peer-focus:outline-none peer-focus:ring-0  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[3px] after:bg-primary-text after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-secondary-text"></div>
      <span className="font-medium text-primary-text pl-1">F&deg;</span>
    </label>
  );
};

export default TempUnitToggle;

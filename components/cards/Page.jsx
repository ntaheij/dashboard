function Page(props) {
  return ( 
      <a href={props.link} className="mb-2 bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-4 overflow-hidden shadow-xl flex items-center gap-4 max-w-xl h-24 card-left">
        <div className="mt-2">
          <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
            <div className="box-border block max-w-full">
              <img className="max-w-full block m-0 border-none p-0" alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" />
            </div>
            <img className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full filter-none bg-cover bg-none" src={props.image} alt=""/>
          </div>
        </div>
        <div className="w-full">
            <div>
              <p>{props.title} <span className="ml-1 text-gray-500">{props.subTitle}</span></p>
              <p className="text-gray-400 truncate">{props.linkText}</p>
            </div>
        </div>
      </a>
   );
}

export default Page;
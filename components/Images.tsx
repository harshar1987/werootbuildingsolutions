import React from "react";

type ImageProps = {
  style: React.CSSProperties;
};

export function Advisory(props: ImageProps) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M54.414 14c-1.291-1.289-3.537-1.289-4.828 0l-.639.639a1.226 1.226 0 01-.873.361h-.148c-.33 0-.64-.128-.873-.362l-.69-.689a1.232 1.232 0 01.101-1.839l.574-.459c.611-.49.962-1.22.962-2.003 0-.675-.273-1.336-.751-1.813L45.414 6c-1.291-1.289-3.537-1.29-4.828 0L39.23 7.357A4.175 4.175 0 0038 10.345c0 .57.114 1.126.339 1.652a18.688 18.688 0 009.615 9.744l2.021.897a4.16 4.16 0 001.703.362 4.169 4.169 0 002.965-1.228L56 20.415c.645-.645 1-1.502 1-2.415s-.355-1.77-1-2.414L54.414 14zm.172 5l-1.356 1.357a2.215 2.215 0 01-2.442.453l-2.021-.898a16.693 16.693 0 01-8.589-8.703 2.21 2.21 0 01-.178-.887c0-.586.229-1.136.643-1.55L42 7.415c.268-.268.622-.415 1-.415s.732.147 1 .414l1.835 1.835a.562.562 0 01-.047.84l-.573.459A3.214 3.214 0 0044 13.074c0 .864.336 1.676.947 2.288l.69.689a3.216 3.216 0 002.289.949h.148c.864 0 1.677-.337 2.287-.947l.639-.638c.535-.535 1.465-.535 2 0L54.586 17c.268.267.414.622.414 1s-.146.733-.414 1zM19.469 51.439l2.365-1.351c.227.104.455.2.685.286L23.236 53h5.527l.718-2.625c.229-.086.458-.182.685-.286l2.365 1.351 3.908-3.908-1.351-2.365c.104-.227.2-.455.286-.685L38 43.764v-5.527l-2.625-.718a10.57 10.57 0 00-.286-.685l1.351-2.365-3.908-3.908-2.366 1.35c-.226-.104-.454-.2-.684-.286L28.764 29h-5.527l-.718 2.625a9.808 9.808 0 00-.684.286l-2.366-1.35-3.908 3.908 1.351 2.365c-.104.227-.2.455-.286.685L14 38.236v5.527l2.625.718c.086.229.182.458.286.685l-1.351 2.365 3.909 3.908zM16 42.236v-2.473l2.193-.601.161-.524c.143-.462.335-.923.572-1.37l.258-.485-1.13-1.98 1.748-1.748 1.979 1.129.486-.257a8.01 8.01 0 011.37-.572l.524-.161.603-2.194h2.473l.601 2.193.524.161c.46.143.921.335 1.37.572l.486.257 1.979-1.129 1.748 1.748-1.13 1.98.258.485c.237.447.43.908.572 1.37l.161.524 2.194.603v2.473l-2.193.601-.161.524a7.957 7.957 0 01-.572 1.37l-.258.485 1.13 1.98-1.748 1.748-1.98-1.13-.485.258c-.447.237-.908.43-1.37.572l-.524.161L27.236 51h-2.473l-.601-2.193-.524-.161a7.957 7.957 0 01-1.37-.572l-.485-.258-1.98 1.13-1.748-1.748 1.13-1.98-.258-.485a7.879 7.879 0 01-.572-1.37l-.161-.524L16 42.236z" />
      <path d="M26 47c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
      <path d="M60 1H34c-1.654 0-3 1.346-3 3v8H20c-1.39 0-2.551.954-2.89 2.239C10.864 17.552 7 23.921 7 31v5.08c-3.386.488-6 3.401-6 6.92v4c0 3.859 3.141 7 7 7h5V36H9v-5c0-6.068 3.171-11.56 8.354-14.617A2.99 2.99 0 0020 18h11v6c0 1.654 1.346 3 3 3h8.515c.316 1.303.485 2.644.485 4v5h-4v18h1.899A5.009 5.009 0 0136 58h-5.142c-.447-1.721-1.999-3-3.858-3h-4c-2.206 0-4 1.794-4 4s1.794 4 4 4h4c1.859 0 3.411-1.279 3.858-3H36c3.519 0 6.432-2.614 6.92-6H44c3.859 0 7-3.141 7-7v-4c0-3.519-2.614-6.432-6-6.92V31c0-1.352-.143-2.692-.424-4H47v5.804L56.287 27H60c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zM11 52H9V40H7v11.899A5.01 5.01 0 013 47v-4c0-2.757 2.243-5 5-5h3v14zm16 9h-4c-1.103 0-2-.897-2-2s.897-2 2-2h4c1.103 0 2 .897 2 2s-.897 2-2 2zm22-18v4a5.01 5.01 0 01-4 4.899V40h-2v12h-2V38h3c2.757 0 5 2.243 5 5zM25 14v2h-2v-2h2zm-6 1c0-.551.448-1 1-1h1v2h-1c-.552 0-1-.449-1-1zm8 1v-2h4v2h-4zm34 8c0 .551-.448 1-1 1h-4.287L49 29.196V25H34c-.552 0-1-.449-1-1V4c0-.551.448-1 1-1h26c.552 0 1 .449 1 1v20z" />
    </svg>
  );
}

export function DesignAndEngineering(props: ImageProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 174" {...props}>
      <path d="M171.5 163.641H2.5a2.5 2.5 0 01-2.5-2.5V12.859a2.5 2.5 0 012.5-2.5h151.672a2.5 2.5 0 012.5 2.5v73.927H171.5a2.5 2.5 0 012.5 2.5v71.855a2.5 2.5 0 01-2.5 2.5zm-126-5H169V91.786h-51.701a2.5 2.5 0 01-2.5-2.5v-4.813h-6.172a2.5 2.5 0 110-5h6.172V63.306a2.5 2.5 0 115 0v23.48h14.529V15.359h-14.529v18.28a2.5 2.5 0 11-5 0v-7.667H75.5a2.5 2.5 0 01-2.5-2.5v-8.113h-9.127v11.613a2.5 2.5 0 11-5 0V15.359h-2.706v6.447a2.5 2.5 0 01-2.5 2.5h-.779a8.293 8.293 0 01.696 3.333v6.5c0 4.595-3.738 8.333-8.333 8.333-4.595 0-8.333-3.738-8.333-8.333v-6.5a8.29 8.29 0 01.696-3.333h-.779a2.5 2.5 0 01-2.5-2.5v-6.447H25.25v33.113a2.5 2.5 0 01-2.5 2.5H19.5V65.01h39.373V53.472a2.5 2.5 0 115 0v26h6.172a2.5 2.5 0 110 5h-6.172v12.25a2.5 2.5 0 11-5 0V70.01H23.167v71.796H43a2.5 2.5 0 012.5 2.5v14.335zm-40.5 0h35.5v-11.835H20.667a2.5 2.5 0 01-2.5-2.5v-43.5H5v57.835zm0-62.835h13.167V70.01H5v25.796zm143-9.02h3.672V15.359H148v71.427zm-8.672 0H143V15.359h-3.672v71.427zM5 64.139h9.5V50.972H5v13.167zm12-18.167h3.25V15.359H5v30.613h12zm28.25-21.666a3.337 3.337 0 00-3.333 3.333v6.5c0 1.838 1.495 3.333 3.333 3.333s3.333-1.495 3.333-3.333v-6.5a3.337 3.337 0 00-3.333-3.333zM78 20.972h36.799v-5.613H78v5.613zm-32.75-1.666h5.917v-3.947H39.333v3.947h5.917zm54.706 131.916H79.911a2.5 2.5 0 01-2.5-2.5V102.91a2.5 2.5 0 012.5-2.5h20.045a2.5 2.5 0 012.5 2.5v45.813a2.5 2.5 0 01-2.5 2.499zm-17.545-5h15.045v-2.5h-8.873a2.5 2.5 0 01-2.5-2.5V110.41a2.5 2.5 0 012.5-2.5h8.873v-2.5H82.411v40.812zm8.672-7.5h6.373V112.91h-6.373v25.812zm63.089 11a2.5 2.5 0 01-2.5-2.5v-43a2.5 2.5 0 115 0v7.756a2.5 2.5 0 012.328 2.494v22.5a2.5 2.5 0 01-2.328 2.494v7.756a2.5 2.5 0 01-2.5 2.5zm-24.101-3c-7.951 0-14.179-8.565-14.179-19.5s6.228-19.5 14.179-19.5 14.179 8.565 14.179 19.5-6.228 19.5-14.179 19.5zm0-34c-4.976 0-9.179 6.64-9.179 14.5s4.204 14.5 9.179 14.5 9.179-6.64 9.179-14.5-4.204-14.5-9.179-14.5z" />
    </svg>
  );
}

export function ProjectExecutionAndMonitoring(props: ImageProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <path d="M404.478 237.888h11.44v11.439h-11.44zM95.254 237.888h11.439v11.439H95.254z" />
      <path d="M456.396 325.986c0-13.08-3.92-25.84-11.635-37.957a48.9 48.9 0 00.57-7.461c0-70.74-37.072-136.222-96.75-170.893-22.879-13.292-47.654-21.359-73.717-24.014-2.893-6.823-9.658-11.622-17.523-11.622h-3.512c-10.488 0-19.021 8.533-19.021 19.021v134.744h-4.897v28.156h-15.442c-9.68 0-17.555 7.875-17.555 17.555v15.441h-28.156v6.349c-15.465-3.218-29.278-7.271-41.163-12.013 53.587-20.506 89.802-72.176 89.802-130.718 0-16.994-2.995-33.515-8.9-49.209a172.331 172.331 0 0114.707-3.533l-2.284-11.78c-78.764 15.272-138.486 79.96-151.567 159.586l-.532.533.321.774a203.105 203.105 0 00-2.478 31.624c0 2.53.207 5.015.575 7.46-7.715 12.118-11.635 24.879-11.635 37.957 0 30.604 21.332 59.086 60.066 80.202 37.583 20.488 87.422 31.772 140.336 31.772 52.908 0 102.744-11.284 140.326-31.772 38.733-21.116 60.064-49.598 60.064-80.202zm-142.138 14.321h28.154v-4.832c40.37-7.959 69.932-20.969 86.777-37.824-14.561 28.721-65.284 45.322-114.932 51.873v-9.217zm-17.556-84.346H281.26v-28.156h-4.896V97.915a170.337 170.337 0 0127.044 5.417c-5.918 15.71-8.919 32.242-8.919 49.243 0 58.604 36.277 110.304 89.945 130.767-.749.298-1.506.594-2.271.886l4.281 11.21c20.964-8.007 36.464-17.853 46.311-29.387.041.531.094 1.06.131 1.592l-.023-.005c-4.478 24.636-37.309 44.724-90.449 55.595v-15.512c10.869-2.148 21.124-4.711 30.543-7.635l-3.559-11.461c-8.342 2.591-17.398 4.883-26.984 6.848v-6.516H314.26v-15.441c-.002-9.68-7.877-17.555-17.558-17.555zm17.556 44.996h16.154v27.35h-16.154v-27.35zm116.168-53.37c-4.613 10.526-14.855 20.159-30.035 28.368-55.404-15.245-93.902-65.65-93.902-123.38 0-15.729 2.811-31.015 8.346-45.523a173.622 173.622 0 0127.72 13c46.581 27.062 78.462 74.185 87.871 127.535zM246.808 93.061a7.029 7.029 0 017.021-7.021h3.512a7.029 7.029 0 017.021 7.021v134.744h-17.555V93.061zm-4.897 146.744h27.349v16.156h-27.349v-16.156zm-32.996 33.711a5.561 5.561 0 015.555-5.555h82.233a5.562 5.562 0 015.556 5.555v82.232a5.562 5.562 0 01-5.556 5.555H214.47a5.56 5.56 0 01-5.555-5.555v-82.232zm-28.156 27.441h16.156v27.35h-16.156v-27.35zm-12 22.059c-51.775-10.75-84.172-30.403-89.286-54.471-.104-.46-.192-.928-.266-1.395l-.066.011c.029-.42.062-.839.094-1.259 16.005 18.646 46.922 33.129 89.524 41.658v15.456zm28.309-215.939c5.525 14.495 8.331 29.772 8.331 45.498 0 57.656-38.413 108.025-93.713 123.336-13.577-7.343-23.325-15.837-28.514-25.123l.171-.171-1.781-3.214c11.396-64.668 55.541-118.5 115.506-140.326zm193.52 288.575c-35.85 19.545-83.646 30.309-134.582 30.309-50.941 0-98.741-10.764-134.593-30.309-34.7-18.916-53.81-43.657-53.81-69.666 0-7.537 1.618-14.996 4.808-22.283 4.18 7.957 10.616 15.342 19.317 22.08.539.419 1.088.838 1.647 1.258l.353.256c.225.162.447.322.738.537l1.099.783c.702.49 1.414.973 2.207 1.508 5.131 3.411 10.933 6.646 17.245 9.619l5.111-10.857c-5.782-2.723-11.069-5.668-15.717-8.758-.661-.447-1.323-.895-1.898-1.295l-.955-.68c-.27-.2-.54-.395-.814-.593l-.214-.155c-.487-.365-.966-.73-1.446-1.104-7.569-5.861-13.049-12.2-16.417-18.957 16.679 16.864 46.049 29.913 86.09 37.92v5.041h28.156v9.096c-21.727-2.961-43.795-8.035-61.459-14.19l-3.948 11.332c19.11 6.659 43.104 12.101 66.45 15.106 2.432 6.781 8.905 11.652 16.512 11.652h82.233c7.563 0 14.007-4.816 16.47-11.537 66.313-8.223 111.127-29.219 126.381-58.146 3.215 7.314 4.844 14.801 4.844 22.367 0 26.009-19.109 50.75-53.808 69.666z" />
      <path d="M255.586 354.154c21.793 0 39.522-17.729 39.522-39.522s-17.729-39.522-39.522-39.522-39.523 17.729-39.523 39.522 17.73 39.522 39.523 39.522zm0-67.045c15.176 0 27.522 12.347 27.522 27.522 0 15.177-12.347 27.522-27.522 27.522-15.176 0-27.523-12.346-27.523-27.522 0-15.175 12.347-27.522 27.523-27.522z" />
      <path d="M255.586 330.846c8.94 0 16.214-7.273 16.214-16.214s-7.273-16.214-16.214-16.214-16.214 7.273-16.214 16.214 7.274 16.214 16.214 16.214zm0-20.428c2.324 0 4.214 1.891 4.214 4.214s-1.89 4.214-4.214 4.214c-2.324 0-4.214-1.891-4.214-4.214s1.89-4.214 4.214-4.214z" />
    </svg>
  );
}

export function Miscellaneous(props: ImageProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <path d="M450.255 434.511H61.745c-13.257 0-24.042-10.786-24.042-24.042V101.532c0-13.257 10.785-24.042 24.042-24.042h388.511c13.257 0 24.042 10.786 24.042 24.042v308.937c0 13.256-10.785 24.042-24.043 24.042zM61.745 97.489a4.046 4.046 0 00-4.042 4.042v308.937a4.046 4.046 0 004.042 4.042h388.511a4.046 4.046 0 004.042-4.042V101.532a4.046 4.046 0 00-4.042-4.042H61.745z" />
      <path d="M450.117 163.589H63.655c-13.298 0-24.118-10.785-24.118-24.042v-38.015c0-13.257 10.819-24.042 24.118-24.042h386.462c13.298 0 24.118 10.786 24.118 24.042v38.015c0 13.257-10.819 24.042-24.118 24.042zm-386.462-66.1c-2.271 0-4.118 1.813-4.118 4.042v38.015c0 2.229 1.847 4.042 4.118 4.042h386.462c2.271 0 4.118-1.813 4.118-4.042v-38.015c0-2.229-1.847-4.042-4.118-4.042H63.655z" />
      <path d="M93.73 128.69c-2.63 0-5.21-1.06-7.07-2.92a10.093 10.093 0 01-2.93-7.07 10.1 10.1 0 012.93-7.08c1.86-1.86 4.44-2.92 7.07-2.92s5.21 1.06 7.07 2.92a10.1 10.1 0 012.93 7.08c0 2.63-1.07 5.21-2.93 7.07a10.066 10.066 0 01-7.07 2.92zM142.49 128.69c-2.64 0-5.21-1.06-7.07-2.92a10.076 10.076 0 01-2.93-7.07c0-2.64 1.07-5.22 2.93-7.08 1.86-1.86 4.43-2.92 7.07-2.92 2.63 0 5.21 1.06 7.07 2.92 1.86 1.86 2.93 4.44 2.93 7.08 0 2.63-1.07 5.21-2.93 7.07a10.066 10.066 0 01-7.07 2.92zM130.769 224.768a9.982 9.982 0 01-6.921-2.78L113.217 211.8c-3.987-3.821-4.123-10.151-.301-14.139 3.821-3.987 10.15-4.123 14.139-.301l4.694 4.498 23.393-16.432c4.52-3.173 10.757-2.083 13.931 2.435 3.174 4.52 2.084 10.757-2.435 13.931l-30.123 21.158a9.976 9.976 0 01-5.746 1.818zM136.164 305.05a9.982 9.982 0 01-6.921-2.78l-10.631-10.188c-3.987-3.821-4.123-10.151-.301-14.139 3.821-3.987 10.15-4.123 14.139-.301l4.694 4.498 23.393-16.432c4.521-3.173 10.757-2.083 13.931 2.435 3.174 4.52 2.084 10.757-2.435 13.931l-30.123 21.158a9.976 9.976 0 01-5.746 1.818zM151.512 374.753h-31.377c-5.523 0-10-4.477-10-10s4.477-10 10-10h31.377c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 214.189H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 294.989H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10zM379.69 374.753H203.667c-5.523 0-10-4.477-10-10s4.477-10 10-10H379.69c5.523 0 10 4.477 10 10s-4.477 10-10 10z" />
    </svg>
  )
}

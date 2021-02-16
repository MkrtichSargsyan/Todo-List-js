import logo from "../images/logo.png";

export default (() => {
  const header = document.getElementsByTagName("header")[0];

  header.innerHTML = `
    <nav class="flex justify-between h-10">
      <div class='flex flex-1'>
      <img class='h-full mr-4' src="https://img.icons8.com/cotton/512/ffffff/home--v1.png"/>
        <div class="shadow flex h-full">
          <input class="w-full rounded p-2" type="text" placeholder="Search...">
          <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
            <img src="https://img.icons8.com/metro/26/000000/search.png"/>
          </button>
        </div>
      </div>
      <div class='h-full flex-1 justify-center'><img class='h-full m-auto' src=${logo} alt="logo"/></div>
      <div class='flex flex-1 justify-end items-center'>
        <img class = 'h-4/5' src="https://img.icons8.com/ultraviolet/480/ffffff/plus.png"/>
        <img src="https://img.icons8.com/doodle/50/000000/user-male.png"/>
      </div>
    </nav>
  `;
  return header;
})();

// logo.style.backgroundImage = `url(${s})`;

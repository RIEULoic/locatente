"use client";

import { useNavbarState } from "@/context/NavbarStateContext";

const Navbar = () => {
  const { isHeroNavbarExpanded } = useNavbarState();

  return (
    <div className="fixed w-full z-50 top-0 blur-background ">
      <div className="flex justify-end gap-5 bg-gray-200/40 p-1 ">
        <div>lolove@yopmail.com</div>
        <div>06 93 65 43 21</div>
      </div>
      <nav className="flex justify-around bg-slate-300/40 rounded-b-xl rounded-t-none">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Équipement de camping
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Choisir une tente
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Agence de retrait
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ display: isHeroNavbarExpanded ? "none" : "block" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Faucibus purus in
          massa tempor. Sed sed risus pretium quam vulputate dignissim
          suspendisse in. Nec feugiat nisl pretium fusce. Consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis. Pellentesque elit
          eget gravida cum sociis natoque penatibus et magnis. Lacus viverra
          vitae congue eu consequat ac felis. Nec dui nunc mattis enim ut tellus
          elementum. Nulla pharetra diam sit amet nisl suscipit adipiscing.
          Posuere sollicitudin aliquam ultrices sagittis orci. Facilisis leo vel
          fringilla est ullamcorper eget. Aliquam id diam maecenas ultricies mi
          eget mauris. Lorem dolor sed viverra ipsum nunc aliquet. Faucibus
          turpis in eu mi bibendum neque egestas. Venenatis tellus in metus
          vulputate. Sit amet venenatis urna cursus eget nunc. Faucibus a
          pellentesque sit amet porttitor eget dolor morbi non. Cras fermentum
          odio eu feugiat pretium nibh ipsum consequat nisl. Blandit
        </p>
      </div>
    </div>
  );
};

export default Navbar;

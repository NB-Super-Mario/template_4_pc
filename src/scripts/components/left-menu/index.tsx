// import { MenuContext, MenuStatus } from '@routes/home/index';

import './index.less';

const LeftMenu = (props: any) => {
  return <div />;
};

// <MenuContext.Consumer>
//   {({ menuStatus, toggleStatus }) => (
//     <div
//       className={
//         MenuStatus.COLLAPSE === menuStatus
//           ? 'left-menu collapse'
//           : 'left-menu'
//       }
//     >
//       <div className="left-menu-content">{props.children}</div>

//       <button onClick={toggleStatus} className="opt-btn" />
//     </div>
//   )}
// </MenuContext.Consumer>

export default LeftMenu;

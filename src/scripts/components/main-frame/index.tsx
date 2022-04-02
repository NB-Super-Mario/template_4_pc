import { MenuContext, MenuStatus } from '@routes/home/index';
import './index.less';

const MainFram = (props: any) => (
  <MenuContext.Consumer>
    {({ menuStatus }) => (
      <div
        className={
          MenuStatus.COLLAPSE === menuStatus
            ? 'main-frame collapse'
            : 'main-frame'
        }
      >
        {props.children}
      </div>
    )}
  </MenuContext.Consumer>
);

export default MainFram;

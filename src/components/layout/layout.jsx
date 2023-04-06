import Header from "./header";
import classes from "./layout.module.scss";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes["layout__main"]}>{props.children}</main>
    </div>
  );
};
export default Layout;

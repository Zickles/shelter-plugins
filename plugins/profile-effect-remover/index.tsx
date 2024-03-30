import styles from "./styles.css";

const uninjectCss = shelter.ui.injectCss(styles);

export function onUnload() {
	uninjectCss();
}

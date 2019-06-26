export default {
  functional: true,
  props: ["flexWrap", "flexDirection", "justifyContent", "alignItems", "alignContent"],
  render(h, {props, children}) {

    let styles = {};
    for (const key in props) {
      if(props[key]) {
        styles[key] = props[key]
      }
    }

    return <div class="container" style={styles}> {children} </div>
  }
}
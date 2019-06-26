export default {
  functional: true,
  props: [ "flex", "flexGrow", "flexBasis", "flexShrink", "order", "alignSelf" ],
  render(h, {props, children}) {

    let styles = {};
    for (const key in props) {
      if(props[key]) {
        styles[key] = props[key]
      }
    }

    return  (
      <div class="item" style={styles}>
        {children}
      </div>
    )
  },
}
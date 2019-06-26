export default {
  functional: true,
  props: ["controls", "configs"],
  render(h, {props, listeners}) {
    const configs = Object.keys(props.configs).map(configName => {

      return (
        <div class="control">
          <label>{configName}</label>
          <select
            value={props.controls[configName]}
            onChange={e => listeners.change(configName, e)}>
            {
              props.configs[configName].map(config => (
                <option value={config}> {config} </option>
              ))
            }
          </select>
        </div>
      )
    })
    return (
      <div class="controls">
        {configs}
      </div>
    ) 
  }
}
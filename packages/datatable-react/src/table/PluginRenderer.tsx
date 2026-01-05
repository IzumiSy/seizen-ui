import type {
  DataTablePlugin,
  PluginPosition,
  SidepanelPlugin,
} from "../plugin";
import * as styles from "./styles.css";

interface PluginRendererProps<TData> {
  /**
   * Plugin position to render
   */
  position: PluginPosition;

  /**
   * Plugins to render
   */
  plugins: DataTablePlugin<TData>[];
}

/**
 * Check if a plugin is a sidepanel plugin
 */
function isSidepanelPlugin<TData>(
  plugin: DataTablePlugin<TData>
): plugin is SidepanelPlugin<TData> {
  return "position" in plugin && "render" in plugin;
}

/**
 * Renders plugins for a specific position
 */
export function PluginRenderer<TData>({
  position,
  plugins,
}: PluginRendererProps<TData>) {
  // Filter plugins by position
  const sidepanelPlugins = plugins.filter(
    (p) => isSidepanelPlugin(p) && p.position === position
  ) as SidepanelPlugin<TData>[];

  if (sidepanelPlugins.length === 0) {
    return null;
  }

  const dataPosition = position === "left-sider" ? "left" : "right";

  return (
    <div className={styles.sidepanel} data-position={dataPosition}>
      {sidepanelPlugins.map((plugin) => (
        <div key={plugin.id} className={styles.sidepanelTab}>
          <span className={styles.sidepanelTabLabel}>{plugin.name}</span>
        </div>
      ))}
    </div>
  );
}

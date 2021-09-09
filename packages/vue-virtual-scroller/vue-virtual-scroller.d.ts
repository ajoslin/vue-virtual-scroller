declare module "vue-virtual-scroller" {
  import type {
    ComponentObjectPropsOptions,
    DefineComponent,
    HTMLAttributes,
  } from "vue";

  export const RecycleScroller: DefineComponent<
    ComponentObjectPropsOptions<Record<string, unknown>>,
    HTMLAttributes & {
      items: Array<unknown>;
      direction?: "vertical" | "horizontal";
      itemSize?: number | null;
      minItemSize?: number;
      sizeField: string;
      keyField: string;
      typeField: string;
      pageMode?: boolean;
      prerender?: number;
      buffer?: number;
      emitUpdate?: boolean;
    }
  >;
}

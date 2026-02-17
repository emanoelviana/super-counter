import Text from "@/components/text/Text";

export default function TextPage() {
  return (
    <main className="flex flex-col items-center justify-center h-full gap-8">
      <div className="flex flex-col gap-2">
        <Text size="display-lg">Display LG</Text>
      </div>

      <div className="flex flex-col gap-6 w-2/3">
        <div className="flex flex-col gap-2">
          <Text size="display-sm">Display SM</Text>
          <Text size="display-md">Display MD</Text>
          <Text size="display-lg">Display LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="headline-sm">Headline SM</Text>
          <Text size="headline-md">Headline MD</Text>
          <Text size="headline-lg">Headline LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="title-sm">Title SM</Text>
          <Text size="title-md">Title MD</Text>
          <Text size="title-lg">Title LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="body-sm">Body SM</Text>
          <Text size="body-md">Body MD</Text>
          <Text size="body-lg">Body LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="caption-sm">Caption SM</Text>
          <Text size="caption-md">Caption MD</Text>
          <Text size="caption-lg">Caption LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="button-sm">Button SM</Text>
          <Text size="button-md">Button MD</Text>
          <Text size="button-lg">Button LG</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text tone="base">Tone base</Text>
          <Text tone="rest">Tone rest</Text>
          <Text tone="muted">Tone muted</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text align="left">Align left</Text>
          <Text align="center">Align center</Text>
          <Text align="right">Align right</Text>
        </div>
      </div>
    </main>
  );
}

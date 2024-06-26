# Snapshot report for `lib/PointersLayer.test.tsx`

The actual snapshot is saved in `PointersLayer.test.tsx.snap`.

Generated by [AVA](https://avajs.dev).

## empty

> Snapshot 1

    {
      children: null,
      props: {
        overflow: 'visible',
        x: 15,
        y: 15,
      },
      type: 'svg',
    }

## unknown

> Snapshot 1

    {
      children: null,
      props: {
        overflow: 'visible',
        x: 15,
        y: 15,
      },
      type: 'svg',
    }

## without modifiers

> Snapshot 1

    {
      children: [
        {
          children: [
            {
              children: null,
              props: {
                attributeName: 'opacity',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 1,
              },
              type: 'animate',
            },
            {
              children: null,
              props: {
                attributeName: 'r',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 30,
              },
              type: 'animate',
            },
          ],
          props: {
            className: 'pointer',
            cx: 89,
            cy: 99,
            r: 30,
          },
          type: 'circle',
        },
      ],
      props: {
        overflow: 'visible',
        x: 15,
        y: 15,
      },
      type: 'svg',
    }

## with modifiers

> Snapshot 1

    {
      children: [
        {
          children: [
            {
              children: null,
              props: {
                attributeName: 'opacity',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 1,
              },
              type: 'animate',
            },
            {
              children: null,
              props: {
                attributeName: 'r',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 30,
              },
              type: 'animate',
            },
          ],
          props: {
            className: 'modifierPointer',
            cx: 542.25,
            cy: 139,
            r: 30,
          },
          type: 'circle',
        },
        {
          children: [
            {
              children: null,
              props: {
                attributeName: 'opacity',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 1,
              },
              type: 'animate',
            },
            {
              children: null,
              props: {
                attributeName: 'r',
                dur: '0.5s',
                from: 0,
                repeatCount: '1',
                restart: 'always',
                to: 30,
              },
              type: 'animate',
            },
          ],
          props: {
            className: 'pointer',
            cx: 89,
            cy: 99,
            r: 30,
          },
          type: 'circle',
        },
      ],
      props: {
        overflow: 'visible',
        x: 15,
        y: 15,
      },
      type: 'svg',
    }

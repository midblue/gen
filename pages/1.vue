<template>
  <div id="container"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {},
  mounted(): void {
    // This is a port of Ken Perlin's Java code. The
    // original Java code is at http://cs.nyu.edu/%7Eperlin/noise/.
    // Note that in this version, a number from 0 to 1 is returned.
    const PerlinNoise = new (function() {
      //@ts-ignore
      this.noise = function(
        x: number,
        y: number,
        z: number,
      ) {
        var p = new Array(512)
        var permutation = [
          151,
          160,
          137,
          91,
          90,
          15,
          131,
          13,
          201,
          95,
          96,
          53,
          194,
          233,
          7,
          225,
          140,
          36,
          103,
          30,
          69,
          142,
          8,
          99,
          37,
          240,
          21,
          10,
          23,
          190,
          6,
          148,
          247,
          120,
          234,
          75,
          0,
          26,
          197,
          62,
          94,
          252,
          219,
          203,
          117,
          35,
          11,
          32,
          57,
          177,
          33,
          88,
          237,
          149,
          56,
          87,
          174,
          20,
          125,
          136,
          171,
          168,
          68,
          175,
          74,
          165,
          71,
          134,
          139,
          48,
          27,
          166,
          77,
          146,
          158,
          231,
          83,
          111,
          229,
          122,
          60,
          211,
          133,
          230,
          220,
          105,
          92,
          41,
          55,
          46,
          245,
          40,
          244,
          102,
          143,
          54,
          65,
          25,
          63,
          161,
          1,
          216,
          80,
          73,
          209,
          76,
          132,
          187,
          208,
          89,
          18,
          169,
          200,
          196,
          135,
          130,
          116,
          188,
          159,
          86,
          164,
          100,
          109,
          198,
          173,
          186,
          3,
          64,
          52,
          217,
          226,
          250,
          124,
          123,
          5,
          202,
          38,
          147,
          118,
          126,
          255,
          82,
          85,
          212,
          207,
          206,
          59,
          227,
          47,
          16,
          58,
          17,
          182,
          189,
          28,
          42,
          223,
          183,
          170,
          213,
          119,
          248,
          152,
          2,
          44,
          154,
          163,
          70,
          221,
          153,
          101,
          155,
          167,
          43,
          172,
          9,
          129,
          22,
          39,
          253,
          19,
          98,
          108,
          110,
          79,
          113,
          224,
          232,
          178,
          185,
          112,
          104,
          218,
          246,
          97,
          228,
          251,
          34,
          242,
          193,
          238,
          210,
          144,
          12,
          191,
          179,
          162,
          241,
          81,
          51,
          145,
          235,
          249,
          14,
          239,
          107,
          49,
          192,
          214,
          31,
          181,
          199,
          106,
          157,
          184,
          84,
          204,
          176,
          115,
          121,
          50,
          45,
          127,
          4,
          150,
          254,
          138,
          236,
          205,
          93,
          222,
          114,
          67,
          29,
          24,
          72,
          243,
          141,
          128,
          195,
          78,
          66,
          215,
          61,
          156,
          180,
        ]
        for (var i = 0; i < 256; i++)
          p[256 + i] = p[i] = permutation[i]

        var X = Math.floor(x) & 255, // FIND UNIT CUBE THAT
          Y = Math.floor(y) & 255, // CONTAINS POINT.
          Z = Math.floor(z) & 255
        x -= Math.floor(x) // FIND RELATIVE X,Y,Z
        y -= Math.floor(y) // OF POINT IN CUBE.
        z -= Math.floor(z)
        var u = fade(x), // COMPUTE FADE CURVES
          v = fade(y), // FOR EACH OF X,Y,Z.
          w = fade(z)
        var A = p[X] + Y,
          AA = p[A] + Z,
          AB = p[A + 1] + Z, // HASH COORDINATES OF
          B = p[X + 1] + Y,
          BA = p[B] + Z,
          BB = p[B + 1] + Z // THE 8 CUBE CORNERS,

        return scale(
          lerp(
            w,
            lerp(
              v,
              lerp(
                u,
                grad(p[AA], x, y, z), // AND ADD
                grad(p[BA], x - 1, y, z),
              ), // BLENDED
              lerp(
                u,
                grad(p[AB], x, y - 1, z), // RESULTS
                grad(p[BB], x - 1, y - 1, z),
              ),
            ), // FROM  8
            lerp(
              v,
              lerp(
                u,
                grad(p[AA + 1], x, y, z - 1), // CORNERS
                grad(p[BA + 1], x - 1, y, z - 1),
              ), // OF CUBE
              lerp(
                u,
                grad(p[AB + 1], x, y - 1, z - 1),
                grad(p[BB + 1], x - 1, y - 1, z - 1),
              ),
            ),
          ),
        )
      }
      function fade(t: number) {
        return t * t * t * (t * (t * 6 - 15) + 10)
      }
      function lerp(t: number, a: number, b: number) {
        return a + t * (b - a)
      }
      function grad(
        hash: number,
        x: number,
        y: number,
        z: number,
      ) {
        var h = hash & 15 // CONVERT LO 4 BITS OF HASH CODE
        var u = h < 8 ? x : y, // INTO 12 GRADIENT DIRECTIONS.
          v = h < 4 ? y : h == 12 || h == 14 ? x : z
        return (
          ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v)
        )
      }
      function scale(n: number) {
        return (1 + n) / 2
      }
    } as any)()

    const container = document.getElementById('container')
    const canvases = document.querySelectorAll('canvas')

    const width = window.innerWidth
    const height = window.innerHeight
    const channelCount = 3
    const scale = 70 // 50
    const depth = 2
    const scaleVariation = 30
    const blendMode = 'screen'
    const blendModes = {
      multiply: {
        fn: (
          total: number,
          current: number,
          index: number,
          all: number[],
        ) => total * current,
        start: 1,
      },
      screen: {
        fn: (
          total: number,
          current: number,
          index: number,
          all: number[],
        ) => 1 - (1 - current) * (1 - total),
        start: 0,
      },
      additive: {
        fn: (
          total: number,
          current: number,
          index: number,
          all: number[],
        ) => total + current / all.length,
        start: 0,
      },
    }

    function clamp(val: number, min: number, max: number) {
      return (
        (Math.min(max, Math.max(min, val)) - min) /
        (max - min)
      )
    }

    function getNoisePoint(
      x: number,
      y: number,
      seeds = [Math.random() * 1000, Math.random() * 1000],
    ) {
      const layers = []
      for (let l = 1; l < depth + 1; l++) {
        layers.push(
          PerlinNoise.noise(
            (x / width + seeds[0]) *
              (scale / (l * scaleVariation)),
            (y / height + seeds[1]) *
              (scale / (l * scaleVariation)),
            0,
          ),
        )
      }
      return (
        layers.reduce(
          blendModes[blendMode].fn,
          blendModes[blendMode].start,
        ) % 1
      )
    }

    function getChannel() {
      const data = []

      const seeds = [
        Math.random() * 1000,
        Math.random() * 1000,
      ]

      for (let y = 0; y < height; y++) {
        const row: number[] = []
        data.push(row)

        for (let x = 0; x < width; x++) {
          row.push(getNoisePoint(x, y, seeds))
        }
      }

      return data
    }

    function go() {
      if (!container) return
      container.innerHTML = ''

      const channels = []
      const finalOutputPixels = []

      for (let c = 0; c < channelCount; c++)
        channels.push(getChannel())

      let canvas = document.querySelector('canvas')
      if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        container.appendChild(canvas)
      }
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, 10000, 10000)

      for (let rowIndex in channels[0]) {
        const r = channels[0][rowIndex]
        for (
          let columnIndex = 0;
          columnIndex < r.length;
          columnIndex++
        ) {
          const pixelChannels = channels.map(
            (channel, channelIndex) =>
              channel[rowIndex][columnIndex],
          )

          finalOutputPixels.push({
            x: columnIndex,
            y: parseInt(rowIndex),
            r: clamp(pixelChannels[0], 0.55, 0.9) * 255,
            g: clamp(pixelChannels[1], 0.55, 0.9) * 255,
            b: clamp(pixelChannels[2], 0.55, 0.9) * 255,
            a: (pixelChannels[3] || 1) * 255,
          })
        }
      }

      for (let p of finalOutputPixels) {
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.a})`
        ctx.fillRect(p.x, p.y, 1, 1)
      }

      const maxWidth = 1000 + 10
      for (let i = 0; i < 1000; i++) {
        // const leftToRight = Math.random() > .5
        const boxWidth = Math.ceil(
          Math.random() * (maxWidth - i),
        )
        const x1 = Math.floor(
          Math.random() * (width - boxWidth),
        )
        const y1 = Math.floor(
          Math.random() * (height - boxWidth),
        )
        const x2 = x1 + boxWidth
        const y2 = y1 + boxWidth
        const topLeftColor = finalOutputPixels.find(
          (p) => p.x === x1 && p.y === y1,
        )
        const bottomRightColor = finalOutputPixels.find(
          (p) => p.x === x2 && p.y === y2,
        )

        const gradient = ctx.createLinearGradient(
          x1,
          y1,
          x2,
          y2,
        )
        if (!topLeftColor || !bottomRightColor) continue
        gradient.addColorStop(
          0,
          `rgba(${topLeftColor.r}, ${topLeftColor.g}, ${topLeftColor.b}, ${topLeftColor.a})`,
        )
        gradient.addColorStop(
          1,
          `rgba(${bottomRightColor.r}, ${bottomRightColor.g}, ${bottomRightColor.b}, ${bottomRightColor.a})`,
        )
        ctx.fillStyle = gradient

        ctx.fillRect(x1, y1, boxWidth, boxWidth)
      }
    }

    go()

    window.addEventListener('click', go)
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
button {
  position: absolute;
  z-index: 2;
}
body {
  margin: 0;
}
#container {
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  /* background: #000; */
  /* filter: saturate(); */
}
#container > * {
  position: absolute;
  /* mix-blend-mode: screen; */
}
</style>

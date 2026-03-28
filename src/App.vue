<template>
  <div class="app">
    <h1>
      <svg class="jb-logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="jb-grad" x1="1" x2="62.75" y1="63" y2="1.25" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF9419"/>
            <stop offset=".43" stop-color="#FF021D"/>
            <stop offset=".99" stop-color="#E600FF"/>
          </linearGradient>
        </defs>
        <path fill="url(#jb-grad)" d="M22.14 0H59c2.76 0 5 2.24 5 5v36.86c0 2.65-1.055 5.195-2.93 7.07L48.93 61.07C47.055 62.945 44.51 64 41.86 64H5c-2.76 0-5-2.24-5-5V22.14c0-2.65 1.055-5.195 2.93-7.07L15.07 2.93C16.945 1.055 19.49 0 22.14 0Z"/>
        <path fill="#000" d="M52 12H6v46h46V12Z"/>
        <g fill="#fff">
          <path d="M11.92 21.49c.065-.12.1-.26.1-.42V16h1.635v5.19c0 .43-.09.815-.275 1.145-.185.33-.45.585-.785.77-.34.185-.725.275-1.16.275H10v-1.505h1.22c.16 0 .3-.035.42-.1s.215-.16.28-.285Z"/>
          <path d="M10 51h16v3H10v-3Z"/>
          <path d="M16.595 20.37h3.475v-1.38h-3.475v-1.565h3.835V16h-5.425v7.38h5.53v-1.42h-3.94v-1.59Z"/>
          <path d="M23.32 17.465h-2.19V16h6v1.465h-2.18v5.915h-1.63v-5.915Z"/>
          <path fill-rule="evenodd" d="M14.935 29.295c-.125-.065-.26-.12-.4-.16.105-.03.21-.07.305-.12.27-.14.48-.335.635-.59.155-.255.23-.545.23-.87 0-.375-.1-.71-.305-1.005-.205-.295-.49-.525-.86-.69-.37-.165-.79-.25-1.26-.25H10v7.38h3.345c.495 0 .94-.085 1.325-.26.39-.175.69-.415.905-.725.215-.31.32-.66.32-1.06 0-.365-.085-.69-.255-.98-.17-.29-.405-.51-.705-.67Zm-3.35-2.445h1.45c.2 0 .38.035.53.11.155.07.275.175.36.31.085.135.13.29.13.47s-.045.35-.13.49-.205.245-.36.32c-.155.075-.33.115-.53.115h-1.45V26.85Zm2.5 4.47c-.095.14-.225.25-.395.325-.17.075-.365.115-.59.115h-1.515v-1.895H13.1c.22 0 .41.04.585.12.17.08.305.195.4.34.095.145.14.315.14.505s-.045.35-.14.49Z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M22.46 29.18c-.225.355-.54.635-.95.83l-.005-.005c-.08.035-.16.07-.245.1l1.685 2.885H21.08l-1.495-2.69H18.52v2.69h-1.635v-7.38h3.23c.535 0 1.005.095 1.41.29.405.195.72.465.94.82.22.355.33.75.33 1.22s-.11.885-.335 1.24Zm-2.465-2.24h-1.47v2.045h1.47c.23 0 .425-.04.595-.125.17-.08.3-.2.39-.355.09-.155.135-.34.135-.545 0-.205-.045-.385-.135-.54-.09-.155-.22-.27-.39-.355-.17-.085-.365-.125-.595-.125Z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="m25.74 25.615-2.635 7.38h1.66l.52-1.63h2.735l.56 1.63h1.63l-2.7-7.38h-1.77Zm-.085 4.515.85-2.605.1-.475.1.475.905 2.605h-1.955Z" clip-rule="evenodd"/>
          <path d="M30.95 25.615h1.685v7.38H30.95v-7.38Z"/>
          <path d="m38.785 30.605-3.175-4.99h-1.59v7.38h1.49V28l3.16 4.995h1.61v-7.38h-1.495v4.99Z"/>
          <path d="M46.065 29.01c.285.205.51.46.67.77h-.005c.16.31.24.645.24 1.01 0 .445-.12.845-.355 1.2s-.565.63-.99.83c-.425.2-.915.3-1.46.3-.545 0-1.03-.1-1.45-.295-.425-.195-.755-.47-.995-.82-.24-.355-.365-.76-.37-1.22h1.635c0 .19.055.36.155.505.1.145.24.255.425.335.18.08.395.12.62.12.225 0 .425-.035.59-.105.165-.07.295-.17.39-.3.095-.13.14-.28.14-.445 0-.2-.065-.375-.19-.51s-.295-.23-.515-.285l-1.33-.275c-.345-.075-.65-.205-.915-.395-.26-.19-.465-.43-.61-.715-.145-.285-.215-.605-.215-.96 0-.44.11-.83.335-1.175.22-.345.535-.61.935-.805.4-.195.85-.29 1.37-.29.52 0 .98.095 1.38.28.405.185.72.445.945.775.225.33.345.71.355 1.14h-1.635c0-.16-.045-.3-.13-.425s-.205-.22-.36-.29c-.155-.07-.34-.105-.54-.105s-.375.035-.53.1c-.15.065-.27.155-.355.275-.085.12-.125.255-.125.415 0 .175.06.32.175.44.115.12.275.2.47.245l1.255.26c.37.07.7.21.99.415Z"/>
        </g>
      </svg>
      IntelliJ Icon Blender
    </h1>

    <div class="controls">
      <div class="control-group">
        <label for="main-icon">Main Icon:</label>
        <select id="main-icon" v-model="selectedMainIcon">
          <option value="" disabled>Select a main icon</option>
          <option v-for="icon in mainIcons" :key="icon.name" :value="icon.name">
            {{ icon.name }}
          </option>
        </select>
        <span
          v-if="selectedMainIcon"
          class="icon-preview-inline"
          v-html="getMainIconSvg(selectedMainIcon)"
        ></span>
      </div>

      <div class="control-group">
        <label for="modifier-icon">Modifier Icon:</label>
        <select id="modifier-icon" v-model="selectedModifierIcon">
          <option value="" disabled>Select a modifier icon</option>
          <option v-for="icon in modifierIcons" :key="icon.name" :value="icon.name">
            {{ icon.name }}
          </option>
        </select>
        <span
          v-if="selectedModifierIcon"
          class="icon-preview-inline"
          v-html="getModifierIconSvg(selectedModifierIcon)"
        ></span>
      </div>

      <div class="control-group">
        <label for="cutout-shape">Cutout Shape:</label>
        <select id="cutout-shape" v-model="selectedCutoutShape" :disabled="!detectedCutoutShape" @change="onCutoutShapeChanged">
          <option value="" disabled>Auto-detected</option>
          <option value="contour">✦ Contour (Auto)</option>
          <option value="circle">Circle</option>
          <option value="rect">Rectangle</option>
          <option value="ellipse">Ellipse</option>
          <optgroup label="Custom">
            <option value="custom-client">👤 Client (Person)</option>
            <option value="custom-config">⚙ Config (Gear)</option>
            <option value="custom-debug">🐛 Debug (Bug)</option>
            <option value="custom-git">◇ Git (Diamond)</option>
            <option value="custom-locked">🔒 Locked (Padlock)</option>
            <option value="custom-run">▶ Run (Triangle)</option>
            <option value="custom-edit">✏ Edit (Pencil)</option>
            <option value="custom-plus">✚ Plus (Cross)</option>
            <option value="custom-resources">📊 Resources (Bars)</option>
          </optgroup>
        </select>
        <span v-if="detectedCutoutShape" class="auto-detected-hint">
          (detected: {{ cutoutShapeLabel(detectedCutoutShape) }})
        </span>
      </div>
    </div>

    <div v-if="combinedSvg" class="result">
      <h2>Preview</h2>
      <div class="preview" :class="'preview-' + previewTheme" v-html="previewSvg"></div>
      <br/>
      <div class="theme-toggle">
        <button
          class="toggle-btn"
          :class="{ active: previewTheme === 'light' }"
          @click="previewTheme = 'light'"
        >☀ Light</button>
        <button
          class="toggle-btn"
          :class="{ active: previewTheme === 'dark' }"
          @click="previewTheme = 'dark'"
        >☾ Dark</button>
      </div>
      <br/>
      <button class="download-btn" @click="downloadIcons">Download SVG (Light + Dark)</button>
    </div>
  </div>
</template>

<script>
const mainIconModules = import.meta.glob('/main-icons/*.svg', { query: '?raw', import: 'default', eager: true })
const modifierIconModules = import.meta.glob('/modifier-icons/*.svg', { query: '?raw', import: 'default', eager: true })

function loadIcons(modules, folder) {
  const allEntries = {}
  for (const path in modules) {
    const filename = path.split('/').pop()
    const name = filename.replace('.svg', '')
    allEntries[name] = modules[path]
  }

  const icons = []
  for (const name in allEntries) {
    if (name.endsWith('_dark')) continue
    const darkName = name + '_dark'
    icons.push({
      name,
      svg: allEntries[name],
      svgDark: allEntries[darkName] || allEntries[name]
    })
  }
  icons.sort((a, b) => a.name.localeCompare(b.name))
  return icons
}

/**
 * Parse an SVG string and extract the bounding box of all visible elements.
 * Returns { minX, minY, maxX, maxY, width, height }
 */
function getModifierBoundingBox(svgString) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  const svg = doc.documentElement

  // Create a temporary container to measure bounding boxes
  const container = document.createElement('div')
  container.style.position = 'absolute'
  container.style.left = '-9999px'
  container.style.top = '-9999px'
  container.style.width = '16px'
  container.style.height = '16px'
  document.body.appendChild(container)

  const clone = svg.cloneNode(true)
  clone.setAttribute('width', '16')
  clone.setAttribute('height', '16')
  container.appendChild(clone)

  let minX = 16, minY = 16, maxX = 0, maxY = 0
  const elements = clone.querySelectorAll('path, circle, rect, ellipse, polygon, polyline, line')
  elements.forEach(el => {
    try {
      const bbox = el.getBBox()
      if (bbox.width > 0 || bbox.height > 0) {
        minX = Math.min(minX, bbox.x)
        minY = Math.min(minY, bbox.y)
        maxX = Math.max(maxX, bbox.x + bbox.width)
        maxY = Math.max(maxY, bbox.y + bbox.height)
      }
    } catch (e) {
      // ignore elements that can't compute bbox
    }
  })

  document.body.removeChild(container)

  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  }
}

/**
 * Analyze the modifier SVG to compute a "rectangularity" score.
 * Returns a value between 0 and 1 where higher means more rectangular.
 *
 * Heuristics used:
 * - Proportion of non-rotated <rect> elements among all shape elements
 * - Ratio of straight-line commands (H, V, L) vs curves (C, S, Q, T, A) in paths
 * - Penalizes circular elements and rotated rects (star-burst patterns)
 */
function computeRectangularityScore(svgString, bbox) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  const svg = doc.documentElement

  const allShapes = svg.querySelectorAll('path, circle, rect, ellipse, polygon, polyline, line')
  if (allShapes.length === 0) return 0

  const rects = svg.querySelectorAll('rect')
  const circles = svg.querySelectorAll('circle, ellipse')

  // Count only non-rotated rects (rotated rects are often used for radial patterns)
  let axisAlignedRects = 0
  rects.forEach(r => {
    const transform = r.getAttribute('transform') || ''
    if (!transform.includes('rotate')) {
      axisAlignedRects++
    }
  })

  // Score component 1: ratio of axis-aligned rect elements to total shape elements
  const rectRatio = axisAlignedRects / allShapes.length

  // Score component 2: ratio of axis-aligned segments in path data.
  // H and V commands are explicitly horizontal/vertical.
  // L commands are checked: if only one coordinate changes, they are axis-aligned too.
  // Stroke-only paths (decorative) are skipped.
  const paths = svg.querySelectorAll('path')
  let axisAlignedRatio = 0
  if (paths.length > 0) {
    let axisAlignedSegments = 0
    let otherSegments = 0
    paths.forEach(p => {
      const fill = p.getAttribute('fill')
      if (fill === 'none' || (!fill && p.getAttribute('stroke'))) return
      const d = p.getAttribute('d') || ''
      // Tokenize: split into command + coordinate groups
      const tokens = d.match(/[A-Za-z][^A-Za-z]*/g) || []
      let curX = 0, curY = 0
      tokens.forEach(token => {
        const cmd = token.charAt(0)
        const nums = token.slice(1).trim().match(/-?[\d.]+/g)
        if ('Mm'.includes(cmd) && nums && nums.length >= 2) {
          curX = cmd === 'M' ? parseFloat(nums[0]) : curX + parseFloat(nums[0])
          curY = cmd === 'M' ? parseFloat(nums[1]) : curY + parseFloat(nums[1])
          return
        }
        if ('Zz'.includes(cmd)) return
        if ('HhVv'.includes(cmd)) {
          axisAlignedSegments++
          if (cmd === 'H' && nums) curX = parseFloat(nums[0])
          else if (cmd === 'h' && nums) curX += parseFloat(nums[0])
          else if (cmd === 'V' && nums) curY = parseFloat(nums[0])
          else if (cmd === 'v' && nums) curY += parseFloat(nums[0])
        } else if ('Ll'.includes(cmd) && nums && nums.length >= 2) {
          const nx = cmd === 'L' ? parseFloat(nums[0]) : curX + parseFloat(nums[0])
          const ny = cmd === 'L' ? parseFloat(nums[1]) : curY + parseFloat(nums[1])
          // Axis-aligned if only x or only y changes
          if (Math.abs(nx - curX) < 0.01 || Math.abs(ny - curY) < 0.01) {
            axisAlignedSegments++
          } else {
            otherSegments++
          }
          curX = nx
          curY = ny
        } else {
          otherSegments++
          // Approximate position update for curves
          if (nums && nums.length >= 2) {
            curX = cmd === cmd.toUpperCase() ? parseFloat(nums[nums.length - 2]) : curX + parseFloat(nums[nums.length - 2])
            curY = cmd === cmd.toUpperCase() ? parseFloat(nums[nums.length - 1]) : curY + parseFloat(nums[nums.length - 1])
          }
        }
      })
    })
    const total = axisAlignedSegments + otherSegments
    axisAlignedRatio = total > 0 ? axisAlignedSegments / total : 0
  }

  // Score component 3: penalize if circles/ellipses are present
  const circlePenalty = circles.length / allShapes.length

  // Weighted combination
  // If rect elements dominate, that alone is a strong rectangular signal
  const score = Math.max(rectRatio, rectRatio * 0.4 + axisAlignedRatio * 0.5) - circlePenalty * 0.4
  return Math.max(0, Math.min(1, score))
}

/**
 * Map of modifier icon names to their custom cutout shape IDs.
 */
const CUSTOM_CUTOUT_SHAPES = {
  client: 'custom-client',
  config: 'custom-config',
  debug: 'custom-debug',
  git: 'custom-git',
  locked: 'custom-locked',
  run: 'custom-run',
  edit: 'custom-edit',
  plus: 'custom-plus',
  resources: 'custom-resources'
}

/**
 * Generate a custom cutout SVG path string for a given custom shape type.
 * The path includes ~1.5px padding around the modifier icon's visual area.
 * Returns an SVG path `d` attribute string.
 */
function getCustomCutoutPath(shapeType, bbox) {
  const p = 1.5 // padding
  const cx = (bbox.minX + bbox.maxX) / 2
  const cy = (bbox.minY + bbox.maxY) / 2

  switch (shapeType) {
    case 'custom-client': {
      // Person silhouette: circular head on top, wider torso/shoulders below
      // Head circle: center (12, 9), radius 2 => with padding: radius 2 + p
      const headCx = 12
      const headCy = 9
      const headR = 2 + p
      // Body/torso: x=8..16, y=12..16 => with padding
      const bodyL = 8 - p
      const bodyR = 16 + p
      const bodyTop = 12 - p * 0.3
      const bodyBot = 16 + p
      const bodyW = bodyR - bodyL
      const shoulderR = bodyW * 0.15 // rounded shoulder corners
      // Neck width connects head to body
      const neckHalf = headR * 0.65
      return [
        // Start at left neck junction, going up around the head
        `M${headCx - neckHalf},${bodyTop}`,
        `L${headCx - neckHalf},${headCy + headR * 0.4}`,
        `A${headR},${headR} 0 1 1 ${headCx + neckHalf},${headCy + headR * 0.4}`,
        `L${headCx + neckHalf},${bodyTop}`,
        // Right shoulder
        `L${bodyR - shoulderR},${bodyTop}`,
        `Q${bodyR},${bodyTop} ${bodyR},${bodyTop + shoulderR}`,
        // Right side down
        `L${bodyR},${bodyBot - shoulderR}`,
        `Q${bodyR},${bodyBot} ${bodyR - shoulderR},${bodyBot}`,
        // Bottom
        `L${bodyL + shoulderR},${bodyBot}`,
        `Q${bodyL},${bodyBot} ${bodyL},${bodyBot - shoulderR}`,
        // Left side up
        `L${bodyL},${bodyTop + shoulderR}`,
        `Q${bodyL},${bodyTop} ${bodyL + shoulderR},${bodyTop}`,
        'Z'
      ].join(' ')
    }
    case 'custom-config': {
      // Gear/cog: circle with 6 rectangular teeth
      const outerR = Math.max(bbox.width, bbox.height) / 2 + p
      const innerR = outerR * 0.72
      const toothHalf = Math.PI / 12
      let d = ''
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2
        const tStart = angle - toothHalf
        const tEnd = angle + toothHalf
        const gapEnd = angle + Math.PI / 3 - toothHalf
        if (i === 0) {
          d += `M${cx + outerR * Math.cos(tStart)},${cy + outerR * Math.sin(tStart)} `
        }
        d += `L${cx + outerR * Math.cos(tEnd)},${cy + outerR * Math.sin(tEnd)} `
        d += `L${cx + innerR * Math.cos(tEnd)},${cy + innerR * Math.sin(tEnd)} `
        d += `A${innerR},${innerR} 0 0 0 ${cx + innerR * Math.cos(gapEnd)},${cy + innerR * Math.sin(gapEnd)} `
        const nextStart = angle + Math.PI / 3 - toothHalf
        d += `L${cx + outerR * Math.cos(nextStart)},${cy + outerR * Math.sin(nextStart)} `
      }
      d += 'Z'
      return d
    }
    case 'custom-debug': {
      // Precise bug silhouette following actual debug icon geometry.
      // Head: semicircle center (12, 10), radius 2 (y range 8..10)
      // Body: capsule x=[9,15], y=[10.5, 16]
      // Upper legs: tips at x≈16, y≈10.5 (emerging from body at y≈10.2, returning at y≈11.5)
      // Lower legs: tips at x≈16, y≈15.5 (emerging from body at y≈14.4, returning at y≈15.2)
      // All with p padding outward from the actual icon edges.

      const headCx = 12, headCy = 10, headR = 2 + p // padded head radius = 3.5
      const bL = 9 - p     // padded body left wall = 7.5
      const bR = 15 + p    // padded body right wall = 16.5
      const bBot = 16 + p  // padded bottom = 17.5
      const legTipR = 16.0 + p  // right leg tip x = 17.5
      const legTipL = 8.0 - p   // left leg tip x = 6.5
      const urTipY = 10.5  // upper leg tip center y
      const lrTipY = 15.2  // lower leg tip center y
      const rr = 1.2       // leg tip rounding radius
      const cr = 1.5       // body corner rounding

      return [
        // Start at top of head
        `M${headCx},${headCy - headR}`,
        // Head arc right half (clockwise)
        `A${headR},${headR} 0 0 1 ${headCx + headR},${headCy}`,
        // Transition from head right to body right wall (widens)
        `L${bR},${9.3}`,
        // Upper right leg bump with rounded tip
        `L${legTipR - rr},${urTipY - rr * 0.4}`,
        `Q${legTipR},${urTipY} ${legTipR - rr},${urTipY + rr * 0.4}`,
        `L${bR},${12.0}`,
        // Body right wall down to lower right leg
        `L${bR},${13.5}`,
        // Lower right leg bump with rounded tip
        `L${legTipR - rr},${lrTipY - rr * 0.4}`,
        `Q${legTipR},${lrTipY} ${legTipR - rr},${lrTipY + rr * 0.4}`,
        `L${bR},${16.0}`,
        // Body right wall to bottom-right corner
        `L${bR},${bBot - cr}`,
        `Q${bR},${bBot} ${bR - cr},${bBot}`,
        // Bottom edge
        `L${bL + cr},${bBot}`,
        `Q${bL},${bBot} ${bL},${bBot - cr}`,
        // Lower left leg bump (mirror)
        `L${bL},${16.0}`,
        `L${legTipL + rr},${lrTipY + rr * 0.4}`,
        `Q${legTipL},${lrTipY} ${legTipL + rr},${lrTipY - rr * 0.4}`,
        `L${bL},${13.5}`,
        // Body left wall up to upper left leg
        `L${bL},${12.0}`,
        // Upper left leg bump (mirror)
        `L${legTipL + rr},${urTipY + rr * 0.4}`,
        `Q${legTipL},${urTipY} ${legTipL + rr},${urTipY - rr * 0.4}`,
        `L${bL},${9.3}`,
        // Transition from body left to head left
        `L${headCx - headR},${headCy}`,
        // Head arc left half (clockwise, going up)
        `A${headR},${headR} 0 0 1 ${headCx},${headCy - headR}`,
        'Z'
      ].join(' ')
    }
    case 'custom-git': {
      // Diamond (rotated square) with rounded corners
      const hs = Math.max(bbox.width, bbox.height) / 2 + p
      const cr = hs * 0.18
      // Each edge is 45°, so the offset along each axis at distance cr from vertex is cr/√2
      const co = cr * 0.707
      return [
        // Start just after top vertex (going clockwise toward right)
        `M${cx + co},${cy - hs + co}`,
        // Top-right edge to just before right vertex
        `L${cx + hs - co},${cy - co}`,
        // Rounded right vertex
        `Q${cx + hs},${cy} ${cx + hs - co},${cy + co}`,
        // Right-bottom edge to just before bottom vertex
        `L${cx + co},${cy + hs - co}`,
        // Rounded bottom vertex
        `Q${cx},${cy + hs} ${cx - co},${cy + hs - co}`,
        // Bottom-left edge to just before left vertex
        `L${cx - hs + co},${cy + co}`,
        // Rounded left vertex
        `Q${cx - hs},${cy} ${cx - hs + co},${cy - co}`,
        // Left-top edge to just before top vertex
        `L${cx - co},${cy - hs + co}`,
        // Rounded top vertex
        `Q${cx},${cy - hs} ${cx + co},${cy - hs + co}`,
        'Z'
      ].join(' ')
    }
    case 'custom-locked': {
      // Padlock: rectangular body with arch top
      const bx = bbox.minX - p
      const bw = bbox.width + p * 2
      const botY = bbox.maxY + p
      // Body rect occupies lower ~60%, arch occupies upper ~40%
      const bodyTop = bbox.minY + bbox.height * 0.28
      const archTop = bbox.minY - p
      const archWidth = bw * 0.56
      const archR = archWidth / 2
      const archLeft = cx - archR
      const archRight = cx + archR
      const r = 1 // corner radius for body
      return [
        `M${bx + r},${bodyTop}`,
        // Arch
        `L${archLeft},${bodyTop}`,
        `L${archLeft},${bodyTop - (bodyTop - archTop - archR) * 0.5}`,
        `A${archR},${archR} 0 1 1 ${archRight},${bodyTop - (bodyTop - archTop - archR) * 0.5}`,
        `L${archRight},${bodyTop}`,
        // Body top-right
        `L${bx + bw - r},${bodyTop}`,
        `Q${bx + bw},${bodyTop} ${bx + bw},${bodyTop + r}`,
        // Body bottom-right
        `L${bx + bw},${botY - r}`,
        `Q${bx + bw},${botY} ${bx + bw - r},${botY}`,
        // Body bottom-left
        `L${bx + r},${botY}`,
        `Q${bx},${botY} ${bx},${botY - r}`,
        // Body top-left
        `L${bx},${bodyTop + r}`,
        `Q${bx},${bodyTop} ${bx + r},${bodyTop}`,
        'Z'
      ].join(' ')
    }
    case 'custom-run': {
      // Right-pointing play triangle following actual icon geometry.
      // The play icon has: vertical left side, angled top-right & bottom-right
      // edges meeting at a pointed right tip, with bezier-curved tip.
      // Actual outline: left at x≈9, right tip at x≈16.2, top y≈7.8, bot y≈16.1
      // We trace 3 edges (left, top-right, bottom-right) offset outward by p,
      // and use rounded corners at each vertex.

      // Actual shape vertices (from SVG bezier path analysis)
      const leftX = 9
      const tipX = 16.24
      const topY = 7.8
      const botY = 16.1
      const tipY = 12.0 // vertical midpoint at right tip

      // Offset each edge outward by p:
      const l = leftX - p

      // Top-right edge: from (leftX, topY) to (tipX, tipY)
      // Direction: (7.24, 4.2), outward normal (CW): (4.2, -7.24)/8.37 = (0.502, -0.865)
      // Bottom-right edge: from (tipX, tipY) to (leftX, botY)
      // Direction: (-7.24, 4.1), outward normal (CW): (4.1, 7.24)/8.32 = (0.493, 0.870)

      // Offset top-right edge: shift by p*(0.502, -0.865)
      // Line through (leftX + 0.753, topY - 1.298) with slope = 4.2/7.24 = 0.580
      // y = 0.580 * x + c where c = (topY - 1.298) - 0.580*(leftX + 0.753)
      const trSlope = (tipY - topY) / (tipX - leftX)
      const trC = (topY - p * 0.865) - trSlope * (leftX + p * 0.502)

      // Offset bottom-right edge: shift by p*(0.493, 0.870)
      // Line through (tipX + 0.740, tipY + 1.305) with slope = -4.1/7.24 = -0.566
      const brSlope = (botY - tipY) / (leftX - tipX)
      const brC = (tipY + p * 0.870) - brSlope * (tipX + p * 0.493)

      // Corner rounding
      const rr = 1.8

      // Top-left corner: intersection of left edge and top-right edge
      // x = l, y = trSlope * l + trC
      const tlY = trSlope * l + trC
      // Bottom-left corner: x = l, y = brSlope * l + brC
      const blY = brSlope * l + brC
      // Right tip: intersection of top-right and bottom-right edges
      // trSlope * x + trC = brSlope * x + brC → x = (brC - trC)/(trSlope - brSlope)
      const tipPX = (brC - trC) / (trSlope - brSlope)
      const tipPY = trSlope * tipPX + trC

      // At the right tip, use a larger rounding to create a smooth point
      const tipRound = 2.0
      // Pull back along each edge from the tip by tipRound distance
      const trLen = Math.sqrt((tipPX - l) ** 2 + (tipPY - tlY) ** 2)
      const brLen = Math.sqrt((tipPX - l) ** 2 + (tipPY - blY) ** 2)
      const trDx = (l - tipPX) / trLen
      const trDy = (tlY - tipPY) / trLen
      const brDx = (l - tipPX) / brLen
      const brDy = (blY - tipPY) / brLen
      // Points just before the tip on each edge
      const tipTR_x = tipPX + trDx * tipRound
      const tipTR_y = tipPY + trDy * tipRound
      const tipBR_x = tipPX + brDx * tipRound
      const tipBR_y = tipPY + brDy * tipRound

      return [
        // Start at top-left corner (rounded)
        `M${l},${tlY + rr}`,
        `Q${l},${tlY} ${l + rr * 0.6},${tlY + rr * trSlope * 0.6}`,
        // Top-right edge to near the tip
        `L${tipTR_x},${tipTR_y}`,
        // Rounded right tip
        `Q${tipPX},${tipPY} ${tipBR_x},${tipBR_y}`,
        // Bottom-right edge back to bottom-left
        `L${l + rr * 0.6},${blY + rr * brSlope * 0.6}`,
        // Rounded bottom-left corner
        `Q${l},${blY} ${l},${blY - rr}`,
        // Left side back up
        'Z'
      ].join(' ')
    }
    case 'custom-edit': {
      // Diagonal pencil shape following actual icon geometry.
      // The edit icon is a pencil at 45° with 7 outline vertices:
      // A(12.998,8.295) B(14.412,8.295) - flat eraser top
      // C(15.705,9.588) D(15.705,11.002) - vertical right side of eraser
      // E(10.707,16) F(8,16) - flat tip bottom
      // G(8,13.293) - left side of tip
      // Edges: AB=horiz, BC=45°↘, CD=vert, DE=45°↙, EF=horiz, FG=vert, GA=45°↗
      //
      // Offset each edge outward by p along its outward normal.
      // Diagonal edges (45°) get offset by p*√2/2 ≈ 1.06 on each axis.
      const d = p * 0.707 // diagonal offset component

      // Padded edge lines (from perpendicular offset calculations):
      // Edge AB (→, normal ↑):  y = 8.295 - p
      const eAB_y = 8.295 - p
      // Edge BC (↘45°, normal ↗): y = x - 6.117 - 2d
      const eBC_b = -6.117 - 2 * d
      // Edge CD (↓, normal →):  x = 15.705 + p
      const eCD_x = 15.705 + p
      // Edge DE (↙45°, normal ↘): y = -x + 26.707 + 2d
      const eDE_b = 26.707 + 2 * d
      // Edge EF (←, normal ↓):  y = 16 + p
      const eEF_y = 16 + p
      // Edge FG (↑, normal ←):  x = 8 - p
      const eFG_x = 8 - p
      // Edge GA (↗45°, normal ↖): y = -x + 21.293 - 2d
      const eGA_b = 21.293 - 2 * d

      // Padded vertices as intersections of consecutive offset edges:
      // V1 (GA∩AB): y=eAB_y, y=-x+eGA_b → x = eGA_b - eAB_y
      const v1x = eGA_b - eAB_y, v1y = eAB_y
      // V2 (AB∩BC): y=eAB_y, y=x+eBC_b → x = eAB_y - eBC_b
      const v2x = eAB_y - eBC_b, v2y = eAB_y
      // V3 (BC∩CD): x=eCD_x, y=x+eBC_b → y = eCD_x + eBC_b
      const v3x = eCD_x, v3y = eCD_x + eBC_b
      // V4 (CD∩DE): x=eCD_x, y=-x+eDE_b → y = -eCD_x + eDE_b
      const v4x = eCD_x, v4y = -eCD_x + eDE_b
      // V5 (DE∩EF): y=eEF_y, y=-x+eDE_b → x = eDE_b - eEF_y
      const v5x = eDE_b - eEF_y, v5y = eEF_y
      // V6 (EF∩FG): x=eFG_x, y=eEF_y
      const v6x = eFG_x, v6y = eEF_y
      // V7 (FG∩GA): x=eFG_x, y=-x+eGA_b → y = -eFG_x + eGA_b
      const v7x = eFG_x, v7y = -eFG_x + eGA_b

      // Corner rounding radius
      const rr = 1.0

      return [
        // V1: top-left (GA→AB transition, 135° interior angle)
        `M${v1x + rr * 0.707},${v1y + rr * 0.707}`,
        `Q${v1x},${v1y} ${v1x + rr},${v1y}`,
        // Top edge to V2 (AB→BC transition, 135° interior)
        `L${v2x - rr},${v2y}`,
        `Q${v2x},${v2y} ${v2x + rr * 0.707},${v2y + rr * 0.707}`,
        // Diagonal to V3 (BC→CD transition, 135° interior)
        `L${v3x - rr * 0.707},${v3y - rr * 0.707}`,
        `Q${v3x},${v3y} ${v3x},${v3y + rr}`,
        // Right side down to V4 (CD→DE transition, 135° interior)
        `L${v4x},${v4y - rr}`,
        `Q${v4x},${v4y} ${v4x - rr * 0.707},${v4y + rr * 0.707}`,
        // Diagonal down to V5 (DE→EF transition, 135° interior)
        `L${v5x + rr * 0.707},${v5y - rr * 0.707}`,
        `Q${v5x},${v5y} ${v5x - rr},${v5y}`,
        // Bottom edge to V6 (EF→FG transition, 90° interior)
        `L${v6x + rr},${v6y}`,
        `Q${v6x},${v6y} ${v6x},${v6y - rr}`,
        // Left side up to V7 (FG→GA transition, 90° interior)
        `L${v7x},${v7y + rr}`,
        `Q${v7x},${v7y} ${v7x + rr * 0.707},${v7y - rr * 0.707}`,
        // Diagonal back up to V1
        'Z'
      ].join(' ')
    }
    case 'custom-plus': {
      // Plus/cross shape
      const l = bbox.minX - p
      const r = bbox.maxX + p
      const t = bbox.minY - p
      const b = bbox.maxY + p
      const w = r - l
      const h = b - t
      const armW = Math.min(w, h) * 0.33 // width of each arm
      const rr = armW * 0.25 // small corner radius
      const midL = cx - armW / 2
      const midR = cx + armW / 2
      const midT = cy - armW / 2
      const midB = cy + armW / 2
      return [
        `M${midL + rr},${t}`,
        `L${midR - rr},${t}`,
        `Q${midR},${t} ${midR},${t + rr}`,
        `L${midR},${midT}`,
        `L${r - rr},${midT}`,
        `Q${r},${midT} ${r},${midT + rr}`,
        `L${r},${midB - rr}`,
        `Q${r},${midB} ${r - rr},${midB}`,
        `L${midR},${midB}`,
        `L${midR},${b - rr}`,
        `Q${midR},${b} ${midR - rr},${b}`,
        `L${midL + rr},${b}`,
        `Q${midL},${b} ${midL},${b - rr}`,
        `L${midL},${midB}`,
        `L${l + rr},${midB}`,
        `Q${l},${midB} ${l},${midB - rr}`,
        `L${l},${midT + rr}`,
        `Q${l},${midT} ${l + rr},${midT}`,
        `L${midL},${midT}`,
        `L${midL},${t + rr}`,
        `Q${midL},${t} ${midL + rr},${t}`,
        'Z'
      ].join(' ')
    }
    case 'custom-resources': {
      // Stepped bar chart shape: 3 bars ascending right, with padding
      const botY = bbox.maxY + p
      const rr = 1 // corner radius
      // Bar 1 (shortest, leftmost): x=8..10, y=13..16
      const b1l = 8 - p
      const b1r = 10 + 0.3
      const b1t = 13 - p
      // Bar 2 (medium): x=11..13, y=11..16
      const b2l = 10.7
      const b2r = 13 + 0.3
      const b2t = 11 - p
      // Bar 3 (tallest, rightmost): x=14..16, y=9..16
      const b3l = 13.7
      const b3r = 16 + p
      const b3t = 9 - p
      return [
        `M${b1l + rr},${b1t}`,
        `L${b1r},${b1t}`,
        `L${b1r},${b2t}`,
        `L${b2r},${b2t}`,
        `L${b2r},${b3t}`,
        `L${b3r - rr},${b3t}`,
        `Q${b3r},${b3t} ${b3r},${b3t + rr}`,
        `L${b3r},${botY - rr}`,
        `Q${b3r},${botY} ${b3r - rr},${botY}`,
        `L${b1l + rr},${botY}`,
        `Q${b1l},${botY} ${b1l},${botY - rr}`,
        `L${b1l},${b1t + rr}`,
        `Q${b1l},${b1t} ${b1l + rr},${b1t}`,
        'Z'
      ].join(' ')
    }
    default:
      return null
  }
}

/**
 * Detect the best cutout shape type based on the modifier's properties.
 * Uses 'contour' by default — this follows the same approach as IntelliJ IDEA's
 * OverlayShapeCreator.java which computes the actual SVG shape outline and applies
 * a uniform stroke expansion for the cutout, rather than approximating with
 * geometric primitives.
 */
function detectCutoutShapeType(bbox, modifierSvg, modifierName) {
  return 'contour'
}

function determineCutoutShape(bbox, modifierSvg, shapeOverride, modifierName) {
  const padding = 1.5
  const cx = (bbox.minX + bbox.maxX) / 2
  const cy = (bbox.minY + bbox.maxY) / 2
  const w = bbox.width + padding * 2
  const h = bbox.height + padding * 2

  const shapeType = shapeOverride || detectCutoutShapeType(bbox, modifierSvg, modifierName)

  // Contour-based cutout: uses the actual modifier SVG shapes with stroke expansion.
  // This replicates IntelliJ IDEA's OverlayShapeCreator.java approach:
  // computeShape() → BasicStroke(2*scale).createStrokedShape() → Area.add()
  if (shapeType === 'contour') {
    return { type: 'contour', strokeWidth: padding * 2 }
  }

  // Custom path-based shapes
  if (shapeType.startsWith('custom-')) {
    const pathD = getCustomCutoutPath(shapeType, bbox)
    if (pathD) {
      return { type: 'path', d: pathD }
    }
  }

  if (shapeType === 'rect') {
    const rx = 1
    return {
      type: 'rect',
      x: cx - w / 2,
      y: cy - h / 2,
      width: w,
      height: h,
      rx
    }
  } else if (shapeType === 'circle') {
    const r = Math.max(w, h) / 2
    return { type: 'circle', cx, cy, r }
  } else {
    return { type: 'ellipse', cx, cy, rx: w / 2, ry: h / 2 }
  }
}

/**
 * Combine main icon SVG with modifier icon SVG by:
 * 1. Creating a cutout in the main icon where the modifier will go
 * 2. Overlaying the modifier icon on top
 */
function combineIconSvgs(mainSvg, modifierSvg, shapeOverride, modifierName) {
  const bbox = getModifierBoundingBox(modifierSvg)
  const cutout = determineCutoutShape(bbox, modifierSvg, shapeOverride, modifierName)

  const parser = new DOMParser()

  // Parse main icon
  const mainDoc = parser.parseFromString(mainSvg, 'image/svg+xml')
  const mainSvgEl = mainDoc.documentElement

  // Parse modifier icon
  const modDoc = parser.parseFromString(modifierSvg, 'image/svg+xml')
  const modSvgEl = modDoc.documentElement

  // Build combined SVG
  const svgNS = 'http://www.w3.org/2000/svg'
  const resultSvg = document.createElementNS(svgNS, 'svg')
  resultSvg.setAttribute('width', '16')
  resultSvg.setAttribute('height', '16')
  resultSvg.setAttribute('viewBox', '0 0 16 16')
  resultSvg.setAttribute('fill', 'none')
  resultSvg.setAttribute('xmlns', svgNS)

  // Create defs with mask for cutout
  const defs = document.createElementNS(svgNS, 'defs')

  const mask = document.createElementNS(svgNS, 'mask')
  mask.setAttribute('id', 'cutout-mask')

  // White rectangle = show everything
  const maskRect = document.createElementNS(svgNS, 'rect')
  maskRect.setAttribute('width', '16')
  maskRect.setAttribute('height', '16')
  maskRect.setAttribute('fill', 'white')
  mask.appendChild(maskRect)

  // Black shape = cutout area
  if (cutout.type === 'contour') {
    // Contour-based cutout: clone modifier SVG elements into the mask with stroke
    // expansion. This replicates OverlayShapeCreator.java's approach:
    // SVGDocument.computeShape() → BasicStroke(2*scale).createStrokedShape(shape)
    // → Area.add(new Area(shape))
    // The stroke extends outward by strokeWidth/2 from each edge of the shape,
    // and round joins/caps produce smooth rounded corners on the cutout.
    const contourGroup = document.createElementNS(svgNS, 'g')
    contourGroup.setAttribute('stroke', 'black')
    contourGroup.setAttribute('stroke-width', String(cutout.strokeWidth))
    contourGroup.setAttribute('stroke-linejoin', 'round')
    contourGroup.setAttribute('stroke-linecap', 'round')
    Array.from(modSvgEl.childNodes).forEach(child => {
      if (child.nodeType === 1 && child.tagName !== 'defs') {
        const clone = child.cloneNode(true)
        // For mask rendering, set fill and stroke to black on all elements.
        // This mirrors Java's Area.add(strokedShape, originalShape):
        // - fill="black" covers the shape interior
        // - stroke="black" with strokeWidth provides uniform padding outward
        // For open paths (e.g. line segments), fill has no visible effect.
        clone.setAttribute('fill', 'black')
        clone.setAttribute('stroke', 'black')
        clone.removeAttribute('fill-rule')
        clone.removeAttribute('clip-rule')
        clone.querySelectorAll('*').forEach(el => {
          el.setAttribute('fill', 'black')
          el.setAttribute('stroke', 'black')
          el.removeAttribute('fill-rule')
          el.removeAttribute('clip-rule')
        })
        contourGroup.appendChild(clone)
      }
    })
    mask.appendChild(contourGroup)
  } else if (cutout.type === 'circle') {
    const circle = document.createElementNS(svgNS, 'circle')
    circle.setAttribute('cx', String(cutout.cx))
    circle.setAttribute('cy', String(cutout.cy))
    circle.setAttribute('r', String(cutout.r))
    circle.setAttribute('fill', 'black')
    mask.appendChild(circle)
  } else if (cutout.type === 'ellipse') {
    const ellipse = document.createElementNS(svgNS, 'ellipse')
    ellipse.setAttribute('cx', String(cutout.cx))
    ellipse.setAttribute('cy', String(cutout.cy))
    ellipse.setAttribute('rx', String(cutout.rx))
    ellipse.setAttribute('ry', String(cutout.ry))
    ellipse.setAttribute('fill', 'black')
    mask.appendChild(ellipse)
  } else if (cutout.type === 'rect') {
    const rect = document.createElementNS(svgNS, 'rect')
    rect.setAttribute('x', String(cutout.x))
    rect.setAttribute('y', String(cutout.y))
    rect.setAttribute('width', String(cutout.width))
    rect.setAttribute('height', String(cutout.height))
    rect.setAttribute('rx', String(cutout.rx))
    rect.setAttribute('fill', 'black')
    mask.appendChild(rect)
  } else if (cutout.type === 'path') {
    const path = document.createElementNS(svgNS, 'path')
    path.setAttribute('d', cutout.d)
    path.setAttribute('fill', 'black')
    mask.appendChild(path)
  }

  defs.appendChild(mask)
  resultSvg.appendChild(defs)

  // Group for main icon with mask applied
  const mainGroup = document.createElementNS(svgNS, 'g')
  mainGroup.setAttribute('mask', 'url(#cutout-mask)')
  Array.from(mainSvgEl.childNodes).forEach(child => {
    if (child.nodeType === 1 && child.tagName !== 'defs') {
      mainGroup.appendChild(child.cloneNode(true))
    }
  })
  resultSvg.appendChild(mainGroup)

  // Group for modifier icon (overlaid on top)
  const modGroup = document.createElementNS(svgNS, 'g')
  Array.from(modSvgEl.childNodes).forEach(child => {
    if (child.nodeType === 1 && child.tagName !== 'defs') {
      modGroup.appendChild(child.cloneNode(true))
    }
  })
  resultSvg.appendChild(modGroup)

  // Serialize to string
  const serializer = new XMLSerializer()
  return serializer.serializeToString(resultSvg)
}

export default {
  name: 'App',
  data() {
    return {
      mainIcons: loadIcons(mainIconModules, 'main-icons'),
      modifierIcons: loadIcons(modifierIconModules, 'modifier-icons'),
      selectedMainIcon: 'file',
      selectedModifierIcon: 'asterisk',
      selectedCutoutShape: '',
      detectedCutoutShape: '',
      combinedSvg: '',
      combinedSvgDark: '',
      previewTheme: 'light'
    }
  },
  watch: {
    selectedMainIcon() {
      if (this.selectedModifierIcon) {
        this.combineIcons()
      }
    },
    selectedModifierIcon() {
      this.detectShape()
      if (this.selectedMainIcon) {
        this.combineIcons()
      }
    }
  },
  mounted() {
    if (this.selectedMainIcon && this.selectedModifierIcon) {
      this.detectShape()
      this.combineIcons()
    }
  },
  computed: {
    previewSvg() {
      const svg = this.previewTheme === 'dark' ? this.combinedSvgDark : this.combinedSvg
      if (!svg) return ''
      return svg.replace(
        'width="16" height="16"',
        'width="128" height="128"'
      )
    }
  },
  methods: {
    getMainIconSvg(name) {
      const icon = this.mainIcons.find(i => i.name === name)
      return icon ? icon.svg : ''
    },
    getModifierIconSvg(name) {
      const icon = this.modifierIcons.find(i => i.name === name)
      return icon ? icon.svg : ''
    },
    cutoutShapeLabel(type) {
      if (type === 'contour') return 'Contour (Auto)'
      if (type === 'rect') return 'Rectangle'
      if (type === 'circle') return 'Circle'
      if (type === 'ellipse') return 'Ellipse'
      if (type === 'custom-client') return 'Client (Person)'
      if (type === 'custom-config') return 'Config (Gear)'
      if (type === 'custom-debug') return 'Debug (Bug)'
      if (type === 'custom-git') return 'Git (Diamond)'
      if (type === 'custom-locked') return 'Locked (Padlock)'
      if (type === 'custom-run') return 'Run (Triangle)'
      if (type === 'custom-edit') return 'Edit (Pencil)'
      if (type === 'custom-plus') return 'Plus (Cross)'
      if (type === 'custom-resources') return 'Resources (Bars)'
      return type
    },
    detectShape() {
      const modifierIcon = this.modifierIcons.find(i => i.name === this.selectedModifierIcon)
      if (!modifierIcon) {
        this.detectedCutoutShape = ''
        this.selectedCutoutShape = ''
        return
      }
      const bbox = getModifierBoundingBox(modifierIcon.svg)
      const detected = detectCutoutShapeType(bbox, modifierIcon.svg, this.selectedModifierIcon)
      this.detectedCutoutShape = detected
      this.selectedCutoutShape = detected
    },
    onCutoutShapeChanged() {
      if (this.combinedSvg) {
        this.combineIcons()
      }
    },
    combineIcons() {
      const mainIcon = this.mainIcons.find(i => i.name === this.selectedMainIcon)
      const modifierIcon = this.modifierIcons.find(i => i.name === this.selectedModifierIcon)
      if (!mainIcon || !modifierIcon) return

      // Detect shape if not yet detected
      if (!this.detectedCutoutShape) {
        this.detectShape()
      }

      const shape = this.selectedCutoutShape || undefined
      const modName = this.selectedModifierIcon
      this.combinedSvg = combineIconSvgs(mainIcon.svg, modifierIcon.svg, shape, modName)
      this.combinedSvgDark = combineIconSvgs(mainIcon.svgDark, modifierIcon.svgDark, shape, modName)
    },
    downloadIcons() {
      if (!this.combinedSvg) return
      const baseName = `${this.selectedMainIcon}_${this.selectedModifierIcon}`
      const copyright = '<!-- Copyright 2000-2026 JetBrains s.r.o. and contributors. Use of this source code is governed by the Apache 2.0 license. -->\n'

      // Download regular (light) SVG
      const blob = new Blob([copyright + this.combinedSvg], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${baseName}.svg`
      a.click()
      URL.revokeObjectURL(url)

      // Download dark SVG
      setTimeout(() => {
        const blobDark = new Blob([copyright + this.combinedSvgDark], { type: 'image/svg+xml' })
        const urlDark = URL.createObjectURL(blobDark)
        const aDark = document.createElement('a')
        aDark.href = urlDark
        aDark.download = `${baseName}_dark.svg`
        aDark.click()
        URL.revokeObjectURL(urlDark)
      }, 100)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'JetBrains Mono', monospace;
  background: #1e1e1e;
  color: #e0e0e0;
  min-height: 100vh;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}

.jb-logo {
  flex-shrink: 0;
}

h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #ccc;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.control-group label {
  min-width: 130px;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 14px;
}

.control-group select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 6px;
  background: #2d2d2d;
  color: #e0e0e0;
  font-size: 14px;
  cursor: pointer;
}

.control-group select:focus {
  outline: none;
  border-color: #5b9bd5;
}

.icon-preview-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.icon-preview-inline svg {
  width: 32px;
  height: 32px;
}

.combine-btn,
.download-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.combine-btn {
  background: #5b9bd5;
  color: #fff;
  align-self: flex-start;
}

.combine-btn:hover:not(:disabled) {
  background: #4a8bc4;
}

.combine-btn:disabled {
  background: #444;
  color: #888;
  cursor: not-allowed;
}

.download-btn {
  background: #4caf50;
  color: #fff;
  margin-top: 16px;
}

.download-btn:hover {
  background: #43a047;
}

.result {
  text-align: center;
  padding: 24px;
  background: #2d2d2d;
  border-radius: 8px;
}

.theme-toggle {
  display: inline-flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 0;
  background: #1e1e1e;
  border-radius: 6px;
  padding: 3px;
}

.toggle-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: #999;
  transition: background 0.2s, color 0.2s;
}

.toggle-btn.active {
  background: #444;
  color: #fff;
}

.toggle-btn:hover:not(.active) {
  color: #ccc;
}

.preview {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  transition: background 0.2s;
}

.preview-light {
  background: #ffffff;
}

.preview-dark {
  background: #3c3f41;
}

.auto-detected-hint {
  font-size: 12px;
  color: #888;
  white-space: nowrap;
}
</style>

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

    <p class="description">
      Forges new icons to be used in plugins for JetBrains IDEs.<br/>
    </p>

    <div class="controls">
      <div class="control-group">
        <label for="main-icon">Main Icon:</label>
        <select id="main-icon" v-model="selectedMainIcon">
          <option value="" disabled>Select a main icon</option>
          <option v-for="icon in mainIcons" :key="icon.name" :value="icon.name">
            {{ icon.name }}
          </option>
          <option value="__custom__" v-if="customMainIconSvg">✦ Custom (uploaded)</option>
        </select>
        <label class="upload-btn" title="Upload custom main icon SVG">
          …
          <input
            type="file"
            accept=".svg,image/svg+xml"
            class="file-input-hidden"
            @change="onCustomMainIconUpload"
            ref="mainIconFileInput"
          />
        </label>
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

    <footer class="footer">
      <a href="https://intellij-icons.jetbrains.design/" target="_blank">IntelliJ Icons</a>
      <span class="footer-separator">·</span>
      Original idea — <a href="https://github.com/DSGolovkov/" target="_blank">Dima Golovkov</a>, our marvelous designer
      <span class="footer-separator">·</span>
      Built with <a href="https://www.jetbrains.com/junie/" target="_blank">Junie</a> the AI coding agent by JetBrains.
    </footer>
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
 * Detect the best cutout shape type based on the modifier's properties.
 * Uses 'contour' by default — this follows the same approach as IntelliJ IDEA's
 * OverlayShapeCreator.java which computes the actual SVG shape outline and applies
 * a uniform stroke expansion for the cutout, rather than approximating with
 * geometric primitives.
 */
function detectCutoutShapeType() {
  return 'contour'
}

function determineCutoutShape(bbox, shapeOverride) {
  const padding = 1.5
  const cx = (bbox.minX + bbox.maxX) / 2
  const cy = (bbox.minY + bbox.maxY) / 2
  const w = bbox.width + padding * 2
  const h = bbox.height + padding * 2

  const shapeType = shapeOverride || detectCutoutShapeType()

  // Contour-based cutout: uses the actual modifier SVG shapes with stroke expansion.
  // This replicates IntelliJ IDEA's OverlayShapeCreator.java approach:
  // computeShape() → BasicStroke(2*scale).createStrokedShape() → Area.add()
  if (shapeType === 'contour') {
    return { type: 'contour', strokeWidth: padding * 2 }
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
function combineIconSvgs(mainSvg, modifierSvg, shapeOverride) {
  const bbox = getModifierBoundingBox(modifierSvg)
  const cutout = determineCutoutShape(bbox, shapeOverride)

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
      previewTheme: 'light',
      customMainIconSvg: '',
      customMainIconName: ''
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
      if (name === '__custom__' && this.customMainIconSvg) {
        return this.customMainIconSvg
      }
      const icon = this.mainIcons.find(i => i.name === name)
      return icon ? icon.svg : ''
    },
    onCustomMainIconUpload(event) {
      const file = event.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (e) => {
        const svgContent = e.target.result
        if (!svgContent.includes('<svg')) {
          alert('Please upload a valid SVG file.')
          return
        }
        this.customMainIconSvg = svgContent
        this.customMainIconName = file.name.replace(/\.svg$/i, '')
        this.selectedMainIcon = '__custom__'
      }
      reader.readAsText(file)
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
      return type
    },
    detectShape() {
      if (!this.modifierIcons.find(i => i.name === this.selectedModifierIcon)) {
        this.detectedCutoutShape = ''
        this.selectedCutoutShape = ''
        return
      }
      const detected = detectCutoutShapeType()
      this.detectedCutoutShape = detected
      this.selectedCutoutShape = detected
    },
    onCutoutShapeChanged() {
      if (this.combinedSvg) {
        this.combineIcons()
      }
    },
    combineIcons() {
      let mainSvg, mainSvgDark
      if (this.selectedMainIcon === '__custom__' && this.customMainIconSvg) {
        mainSvg = this.customMainIconSvg
        mainSvgDark = this.customMainIconSvg
      } else {
        const mainIcon = this.mainIcons.find(i => i.name === this.selectedMainIcon)
        if (!mainIcon) return
        mainSvg = mainIcon.svg
        mainSvgDark = mainIcon.svgDark
      }
      const modifierIcon = this.modifierIcons.find(i => i.name === this.selectedModifierIcon)
      if (!modifierIcon) return

      // Detect shape if not yet detected
      if (!this.detectedCutoutShape) {
        this.detectShape()
      }

      const shape = this.selectedCutoutShape || undefined
      this.combinedSvg = combineIconSvgs(mainSvg, modifierIcon.svg, shape)
      this.combinedSvgDark = combineIconSvgs(mainSvgDark, modifierIcon.svgDark, shape)
    },
    downloadIcons() {
      if (!this.combinedSvg) return
      const mainName = this.selectedMainIcon === '__custom__' ? this.customMainIconName : this.selectedMainIcon
      const baseName = `${mainName}_${this.selectedModifierIcon}`
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

.description {
  text-align: center;
  margin-bottom: 32px;
  font-size: 13px;
  line-height: 1.8;
  color: #aaa;
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

.upload-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px !important;
  padding: 2px 4px;
  height: 24px;
  border-radius: 4px;
  background: #3a3a3a;
  color: #999;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;
}

.upload-btn:hover {
  background: #5b9bd5;
  color: #fff;
}

.file-input-hidden {
  display: none;
}

.footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 12px;
  color: #777;
  line-height: 1.8;
}

.footer a {
  color: #5b9bd5;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-separator {
  margin: 0 6px;
  color: #555;
}
</style>

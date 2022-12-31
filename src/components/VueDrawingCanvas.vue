<template>
  <canvas
    :id="canvasId"
    class="drawing-canvas"
    @mousedown="startDraw"
    @mousemove="draw"
    @mouseup="stopDraw"
    @mouseleave="stopDraw"
    @touchstart="startDraw"
    @touchmove="draw"
    @touchend="stopDraw"
    @touchleave="stopDraw"
    @touchcancel="stopDraw"
    @pointerdown="startDraw"
    @pointermove="draw"
    @pointerup="stopDraw"
    @pointerleave="stopDraw"
    @pointercancel="stopDraw"
    >
  </canvas>
</template>

<style scoped>
  .drawing-canvas {
    touch-action: none;
  }

</style>

<script lang="ts">
/*
Copied from https://github.com/razztyfication/vue-drawing-canvas/blob/master/src/VueDrawingCanvas.ts and modified.
*/

/* eslint-disable no-debugger, no-console */

interface WatermarkImageStyle {
  width: number,
  height: number
}

interface WatermarkFontStyle {
  width: number,
  lineHeight: number,
  color: string,
  font: string,
  drawType: string,
  textAlign: string,
  textBaseline: string,
  rotate: number
}

interface WatermarkData {
  type: string,
  source: string,
  x: number,
  y: number,
  imageStyle?: WatermarkImageStyle,
  fontStyle?: WatermarkFontStyle
}

interface Coordinate {
  x: number,
  y: number,
}

interface StrokeSpec {
  type: string,
  from: Coordinate,
  coordinates: Coordinate[],
  color: string,
  width: number,
  fill: boolean,
  lineCap: CanvasLineCap,
  lineJoin: CanvasLineJoin,
}

interface DataInit {
  loadedImage: any;
  drawing: boolean;
  context: any;
  lines: StrokeSpec[];
  activeLine: StrokeSpec;
  guides: any;
  trash: any;
}

export default {
  name: 'VueDrawingCanvas',
  props: {
    strokeType: {
      type: String,
      validator: (value: string): boolean => {
        return ['dash', 'line', 'square', 'circle', 'triangle', 'half_triangle'].indexOf(value) !== -1
      },
      default: () => 'dash'
    },
    fillShape: {
      type: Boolean,
      default: () => false
    },
    width: {
      type: [String, Number],
      default: () => 600
    },
    height: {
      type: [String, Number],
      default: () => 400
    },
    image: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => '#000000'
    },
    lineWidth: {
      type: Number,
      default: () => 5
    },
    lineCap: {
      type: String,
      validator: (value: string): boolean => {
        return ['round', 'square', 'butt'].indexOf(value) !== -1
      },
      default: () => 'round'
    },
    lineJoin: {
      type: String,
      validator: (value: string): boolean => {
        return ['miter', 'round', 'bevel'].indexOf(value) !== -1
      },
      default: () => 'miter'
    },
    lock: {
      type: Boolean,
      default: () => false
    },
    backgroundColor: {
      type: String,
      default: () => '#FFFFFF'
    },
    backgroundImage: {
      type: String,
      default: (): null | string => null
    },
    watermark: {
      type: Object,
      default: (): null | WatermarkData => null
    },
    saveAs: {
      type: String,
      validator: (value: string) => {
        return ['jpeg', 'png'].indexOf(value) !== -1
      },
      default: () => 'png'
    },
    canvasId: {
      type: String,
      default: () => 'VueDrawingCanvas'
    },
    initialImage: {
      type: Array,
      default: (): any => []
    },
    additionalImages: {
      type: Array,
      default: (): any => []
    },
    outputWidth: {
      type: Number
    },
    outputHeight: {
      type: Number
    }
  },
  data(): DataInit {
    return {
      loadedImage: null,
      drawing: false,
      context: null,
      lines: [],
      activeLine: {
        type: '',
        from: { x: 0, y: 0 },
        coordinates: [],
        color: '',
        width: 0,
        fill: false,
        lineCap: 'round',
        lineJoin: 'round',
      },
      guides: [],
      trash: []
    };
  },
  mounted() {
    this.setContext();
    this.$nextTick(() => {
      this.drawInitialImage()
      this.drawAdditionalImages()
    })
  },
  watch: {
    backgroundImage: function () {
      this.loadedImage = null
    }
  },
  methods: {
    getCanvas() {
      const canvas: HTMLCanvasElement | null = document.querySelector('#'+this.canvasId);
      if (!canvas) {
        throw Error("Canvas with id " + this.canvasId + " not found!");
      }
      return canvas;
    },
    async setContext() {
      this.context = this.context ? this.context : this.getCanvas().getContext('2d');
      await this.setBackground();
    },
    drawInitialImage() {
      if (this.initialImage && this.initialImage.length > 0) {
        // @ts-ignore
        this.lines = [].concat(this.lines, this.initialImage)
        this.redraw(true)
      }
    },
    drawAdditionalImages() {
      if (this.additionalImages && this.additionalImages.length > 0) {
        const canvas = this.getCanvas();
        this.additionalImages.forEach((watermarkObject: any) => {
          this.drawWatermark(canvas, this.context, watermarkObject)
        });
      }
    },
    clear() {
      this.context.clearRect(0, 0, Number(this.width), Number(this.height));
    },
    async setBackground() {
      this.clear();
      this.context.fillStyle = this.backgroundColor;
      this.context.fillRect(0, 0, Number(this.width), Number(this.height))
      
      await this.$nextTick();
      await this.drawBackgroundImage();
      this.save();
    },
    async drawBackgroundImage() {
      if (!this.loadedImage) {
        return new Promise<void>((resolve) => { 
          if (!this.backgroundImage) {
            resolve()
            return;
          }
          const image = new Image();
          image.src = this.backgroundImage;
          image.onload = () => {
            this.context.drawImage(image, 0, 0, Number(this.width), Number(this.height));
            this.loadedImage = image
            resolve();
          }
        })
      } else {
        this.context.drawImage(this.loadedImage, 0, 0, Number(this.width), Number(this.height));
      }
    },    
    getCoordinates(event: Event) {
      if (event instanceof TouchEvent && event.touches.length > 0) {
        const canvas = this.getCanvas();
        const rect = canvas.getBoundingClientRect();
        return {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
        }
      }
      if (event instanceof MouseEvent) {
        return { x: event.offsetX, y: event.offsetY };
      }
      return { x: 0, y: 0 };
      
    },
    startDraw(event: Event) {
      if (!this.lock) {
        this.drawing = true;

        let coordinate = this.getCoordinates(event);
        this.activeLine = {
          type: this.strokeType,
          from: coordinate,
          coordinates: [],
          color: this.color,
          width: this.lineWidth,
          fill: this.strokeType === 'dash' || this.strokeType === 'line' ? false : this.fillShape,
          lineCap: this.lineCap as CanvasLineCap,
          lineJoin: this.lineJoin as CanvasLineJoin,
        };
        this.guides = [];
      }
    },
    draw(event: Event) {
      if (this.drawing) {
        if (!this.context) {
          this.setContext();
        }
        const coordinate = this.getCoordinates(event);
        if (this.strokeType === 'dash') {
          this.activeLine.coordinates.push(coordinate);
          this.drawShape(this.context, this.activeLine, false);
        }
      }
    },
    drawShape(context: CanvasRenderingContext2D, strokeSpec: StrokeSpec, closingPath: boolean) {
      context.strokeStyle = strokeSpec.color;
      context.fillStyle = strokeSpec.color;
      context.lineWidth = strokeSpec.width;
      context.lineJoin = strokeSpec.lineJoin === undefined ? this.lineJoin as CanvasLineJoin : strokeSpec.lineJoin;
      context.lineCap = strokeSpec.lineCap === undefined ? this.lineCap as CanvasLineCap : strokeSpec.lineCap;
      context.beginPath();
      context.setLineDash([]);
      
      context.moveTo(strokeSpec.from.x, strokeSpec.from.y);
      strokeSpec.coordinates.forEach((stroke: { x: number, y: number}) => {
        context.lineTo(stroke.x, stroke.y);
      });
      if (closingPath) {
        context.closePath();
      }
      
      if (strokeSpec.fill) {
        context.fill();
      } else {
        context.stroke();
      }
    },
    stopDraw() {
      if (this.drawing) {
        this.activeLine.coordinates = this.guides.length > 0 ? this.guides : this.activeLine.coordinates;
        this.lines.push(this.activeLine);
        this.redraw(true);
        this.drawing = false;
        this.trash = [];
      }
    },
    reset() {
      if (!this.lock) {
        this.lines = [];
        this.activeLine = {
          type: '',
          from: { x: 0, y: 0 },
          coordinates: [],
          color: '',
          width: 0,
          fill: false,
          lineCap: 'round',
          lineJoin: 'round',
        };
        this.guides = [];
        this.trash = [];
        this.redraw(true);
      }
    },
    undo() {
      if (!this.lock) {
        const line = this.lines.pop();
        if (line) {
          this.trash.push(line);
          this.redraw(true);
        }
      }
    },
    redo() {
      if (!this.lock) {
        let strokes = this.trash.pop();
        if (strokes) {
          this.lines.push(strokes);
          this.redraw(true);
        }
      }
    },
    async redraw(output: boolean) {
      output = typeof output !== 'undefined' ? output : true;
      await this.setBackground()
      .then(() => {
        this.drawAdditionalImages()
      })
      .then(() => {
        let baseCanvas: HTMLCanvasElement = document.createElement('canvas')
        let baseCanvasContext: CanvasRenderingContext2D | null = baseCanvas.getContext('2d')
        baseCanvas.width = Number(this.width)
        baseCanvas.height = Number(this.height)
        
        if (baseCanvasContext) {
          this.lines.forEach((stroke: any) => {
            if (baseCanvasContext) {
              baseCanvasContext.globalCompositeOperation = stroke.type === 'eraser' ? 'destination-out' : 'source-over'
              if (stroke.type !== 'circle' || (stroke.type === 'circle' && stroke.coordinates.length > 0)) {
                this.drawShape(baseCanvasContext, stroke, (stroke.type === 'eraser' || stroke.type === 'dash' || stroke.type === 'line' ? false : true))
              }
            }
          })
          this.context.drawImage(baseCanvas, 0, 0, Number(this.width), Number(this.height))
        }
      })
      .then(() => {
        if (output) {
          this.save();
        }
      });
    },
    wrapText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth : number, lineHeight: number) {
      const newLineRegex = /(\r\n|\n\r|\n|\r)+/g
      const whitespaceRegex = /\s+/g
      var lines = text.split(newLineRegex).filter(word => word.length > 0)
      for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {      
        var words = lines[lineNumber].split(whitespaceRegex).filter(word => word.length > 0);
        var line = '';
  
        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            if(this.watermark && (this.watermark.fontStyle && this.watermark.fontStyle.drawType && this.watermark.fontStyle.drawType === 'stroke') )
            {
              context.strokeText(line, x, y);
            }
            else{
              context.fillText(line, x, y);
            }  
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        if(this.watermark && (this.watermark.fontStyle && this.watermark.fontStyle.drawType && this.watermark.fontStyle.drawType === 'stroke') )
        {
          context.strokeText(line, x, y);
        }
        else{
          context.fillText(line, x, y);
        }
        y += words.length > 0 ? lineHeight : 0;
      }
    },
    save() {
      const canvas = this.getCanvas();
      if (this.watermark) {
        let temp = document.createElement('canvas');
        let ctx: CanvasRenderingContext2D | null = temp.getContext('2d')
        
        if (ctx) {
          temp.width = Number(this.width);
          temp.height = Number(this.height);
          ctx.drawImage(canvas, 0, 0, Number(this.width), Number(this.height));
          
          this.drawWatermark(temp, ctx, this.watermark as WatermarkData)
        }
      } else {
        let temp = document.createElement('canvas');
        let tempCtx: CanvasRenderingContext2D | null = temp.getContext('2d')
        let tempWidth = this.outputWidth === undefined ? this.width : this.outputWidth
        let tempHeight = this.outputHeight === undefined ? this.height : this.outputHeight
        temp.width = Number(tempWidth)
        temp.height = Number(tempHeight)
        
        if (tempCtx) {
          tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
          this.$emit('update:image', temp.toDataURL('image/' + this.saveAs, 1));
          return temp.toDataURL('image/' + this.saveAs, 1);
        }
      }
    },
    drawWatermark(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, watermark: WatermarkData) {
      if (watermark.type === 'Image') {
        let imageWidth = watermark.imageStyle ? (watermark.imageStyle.width ? watermark.imageStyle.width : Number(this.width)) : Number(this.width);
        let imageHeight = watermark.imageStyle ? (watermark.imageStyle.height ? watermark.imageStyle.height : Number(this.height)) : Number(this.height);

        const image = new Image();
        image.src = watermark.source;
        image.onload = () => {
          if (watermark && ctx) {
            ctx.drawImage(image, watermark.x, watermark.y, Number(imageWidth), Number(imageHeight));
          }
          
          let temp = document.createElement('canvas');
          let tempCtx: CanvasRenderingContext2D | null = temp.getContext('2d')
          let tempWidth = this.outputWidth === undefined ? this.width : this.outputWidth
          let tempHeight = this.outputHeight === undefined ? this.height : this.outputHeight
          temp.width = Number(tempWidth)
          temp.height = Number(tempHeight)
          
          if (tempCtx) {
            tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
            this.$emit('update:image', temp.toDataURL('image/' + this.saveAs, 1));
            return temp.toDataURL('image/' + this.saveAs, 1);
          }
        }
      } else if (watermark.type === 'Text') {
        let font = watermark.fontStyle ? (watermark.fontStyle.font ? watermark.fontStyle.font : '20px serif') : '20px serif';
        let align = watermark.fontStyle ? (watermark.fontStyle.textAlign ? watermark.fontStyle.textAlign : 'start') : 'start';
        let baseline = watermark.fontStyle ? (watermark.fontStyle.textBaseline ? watermark.fontStyle.textBaseline : 'alphabetic') : 'alphabetic';
        let color = watermark.fontStyle ? (watermark.fontStyle.color ? watermark.fontStyle.color : '#000000') : '#000000';
        
        ctx.font = font;
        ctx.textAlign = align as CanvasTextAlign;
        ctx.textBaseline = baseline as CanvasTextBaseline;

        if (watermark.fontStyle && watermark.fontStyle.rotate) {
          let centerX, centerY;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            centerX = watermark.x + Math.floor(watermark.fontStyle.width / 2);
          } else {
            centerX = watermark.x;
          }
          if (watermark.fontStyle && watermark.fontStyle.lineHeight) {
            centerY = watermark.y + Math.floor(watermark.fontStyle.lineHeight / 2);
          } else {
            centerY = watermark.y;
          }
          
          ctx.translate(centerX, centerY);
          ctx.rotate(watermark.fontStyle.rotate * Math.PI / 180);
          ctx.translate(centerX * -1, centerY * -1);
        }

        if (watermark.fontStyle && watermark.fontStyle.drawType && watermark.fontStyle.drawType === 'stroke') {
          ctx.strokeStyle = watermark.fontStyle.color;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            this.wrapText(ctx, watermark.source,  watermark.x,  watermark.y, watermark.fontStyle.width, watermark.fontStyle.lineHeight);
          } else {
            ctx.strokeText(watermark.source, watermark.x, watermark.y);
          }
        } else {
          ctx.fillStyle = color;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            this.wrapText(ctx, watermark.source,  watermark.x,  watermark.y, watermark.fontStyle.width, watermark.fontStyle.lineHeight);
          } else {
            ctx.fillText(watermark.source, watermark.x, watermark.y);
          }
        }

        let temp = document.createElement('canvas');
        let tempCtx: CanvasRenderingContext2D | null = temp.getContext('2d')
        let tempWidth = this.outputWidth === undefined ? this.width : this.outputWidth
        let tempHeight = this.outputHeight === undefined ? this.height : this.outputHeight
        temp.width = Number(tempWidth)
        temp.height = Number(tempHeight)
        
        if (tempCtx) {
          tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
          this.$emit('update:image', temp.toDataURL('image/' + this.saveAs, 1));
          return temp.toDataURL('image/' + this.saveAs, 1);
        }
      }
    },
    isEmpty() {
      return this.lines.length > 0 ? false : true;
    },
    getAllStrokes() {
      return this.lines;
    }
  },
};

</script>
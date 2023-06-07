<!-- <template>
  <div class="custom-slider-container" ref="railRef">
    <div class="custom-slider-track" :style="{ width: thumbPosX + 'px' }"></div>
    <div class="custom-slider-thumb" :style="{ left: thumbPosX + 'px' }" ref="thumbRef" @mousedown="startDrag"></div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';

export default {
  name: 'CustomSlider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    defaultValue: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    const railRef = ref(null);
    const thumbRef = ref(null);
    const state = reactive({
      thumbPosX: 0
    });

    const calculateTrackWidth = (mousePosX) => {
      const railDOM = railRef.value;
      const railWidth = railDOM.clientWidth;
      const railPosX = railDOM.getBoundingClientRect().x;
      const width = mousePosX - railPosX;
      if (width < props.min) return props.min;
      if (width > railWidth) return railWidth;
      return width;
    };

    const widthToValue = (width) => {
      const { min, max } = props;
      const railWidth = railRef.value.clientWidth;
      const ratio = width / railWidth;
      return (max - min) * ratio;
    };

    const valueToWidth = (value) => {
      const { min, max } = props;
      const railWidth = railRef.value.clientWidth;
      return (value / (max - min)) * railWidth;
    };

    const handleUpdatePosition = (mousePosX) => {
      const trackWidth = calculateTrackWidth(mousePosX);
      state.thumbPosX = trackWidth;
      props.onChange(widthToValue(trackWidth));
    };

    const startDrag = (event) => {
      const body = document.body;
      const mousePosX = event.clientX;

      const handleMouseMove = (event) => {
        const mousePosX = event.clientX;
        handleUpdatePosition(mousePosX);
      };

      const handleMouseUp = () => {
        body.removeEventListener('mousemove', handleMouseMove);
        body.removeEventListener('mouseup', handleMouseUp);
      };

      body.addEventListener('mousemove', handleMouseMove);
      body.addEventListener('mouseup', handleMouseUp);
    };

    onMounted(() => {
      const railDOM = railRef.value;
      const railWidth = railDOM.clientWidth;
      const defaultWidth = valueToWidth(props.defaultValue);
      state.thumbPosX = defaultWidth;
    });

    return {
      railRef,
      thumbRef,
      ...state,
      startDrag
    };
  }
};
</script>

<style scoped>
.custom-slider-container {
  width: 320px;
  height: 6px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
}

.custom-slider-track {
  position: absolute;
  height: 6px;
  border-radius: 5px;
}

.custom-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  /* transform: translateY
  translateY(-50%); */
  background-color: #2196f3;
  cursor: pointer;
}
</style> -->

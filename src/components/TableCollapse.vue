<template>
  <div>
    <div class="jx-board" v-for="(item, index) in dataset" :key="index">
      <div class="collapse-title-box" @click="collapseTestFn(item.collapseId)">
        <div class="collapse-title">
          {{ item.departureAirport }} {{ item.collapseId }} isExpandAll:{{ isExpandAll }}
          <!-- :class="[collapseStates[item.collapseId] ? 'rotate-icon' : '']" -->
          <button class="expand-icon" :class="[collapseStates[item.collapseId] ? 'rotate-icon' : '']">&darr;</button>
        </div>
      </div>
      <div :ref="'dataTableBody_' + item.collapseId" class="dataTable-body" @scroll="syncHeaderScroll(item.collapseId, index)" >
        <table class="table" v-if="collapseStates[item.collapseId]" >
          <tbody>
            <tr v-for="(item, rowIndex) in item.arrivalAirportsData">
              <td :style="{ 'width': '100.97px' }">{{ item.name }}</td>
              <td :style="{ 'width': '100.97px' }">{{ item.airline }}</td>

              <td :style="{ 'width': '100.19px' }">{{ item.flights }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.seats }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.passengers }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.passengerLoadFactor }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.competitiveness === null ? '-' : item.competitiveness }}</td>

          
              <td :style="{ 'width': '100.19px' }">{{ item.flightsArrival }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.seatsArrival }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.passengersArrival }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.passengerLoadFactorArrival }}</td>
              <td :style="{ 'width': '100.19px' }">{{ item.competitivenessArrival === null ? '-' : item.competitivenessArrival }}</td>

                <td :style="{ 'width': '100.19px' }">{{ item.flightsDep }}</td>
                <td :style="{ 'width': '100.19px' }">{{ item.seatsDep }}</td>
                <td :style="{ 'width': '100.19px' }">{{ item.passengersDep }}</td>
                <td :style="{ 'width': '100.19px' }">{{ item.passengerLoadFactorDep }}</td>
                <td :style="{ 'width': '100.19px' }">{{ item.competitivenessDep === null ? '-' : item.competitivenessDep }}</td>
            </tr>
          </tbody>
        </table>
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataset: {
      type: Array,
      default: () => [],
    },
    headerScrollValue:{
      type: Number,
      default: 0,
    },
    isExpandAll:{
      type: Boolean,
      default: false,
    },
    // isAnyCollapseOpen:{
    //   type: Boolean,
    //   default: false,
    // },
  },
  components: {
  },
  data() {
    return{
      collapseStates:{},
      // isExpandObj:{},
      isAnyCollapseOpen: false,
    }
  },
  computed:{
    listenCollapseChange(){
      const { isExpandAll, isAnyCollapseOpen } = this;
      console.log("listenCollapseChange");
      return { isExpandAll, isAnyCollapseOpen }
    }
  },
  methods:{
    syncHeaderScroll(id, index) {
      const scrollLeftValue = this.$refs[`dataTableBody_${id}`][0].scrollLeft;
      //將 scrollLeftValue 使用 emit 傳給父層
      this.$emit("tableBodyScrollValue", scrollLeftValue);
      //滾動任一 dataTableBody 也要帶動其他 dataTableBody scroll
      this.dataset.forEach((item) => {
        if (this.$refs[`dataTableBody_${item.collapseId}`][0] !== this.$refs[`dataTableBody_${id}`][0]) {
          this.$refs[`dataTableBody_${item.collapseId}`][0].scrollLeft = scrollLeftValue;
        }
      });
    },
    collapseTestFn(collapseName){
      console.log("collapseTestFn", collapseName);
      this.collapseStates[collapseName] = !this.collapseStates[collapseName];
      this.isExpandAllFn();
    },
    initializeCollapseStates() {
      console.log(this.dataset)
      if(this.dataset.length === 0) return;
      this.collapseStates = this.dataset.reduce((acc, _, index) => {
        acc[`collapse${index + 1}`]  = true; // Set all collapse states to true initially
        return acc;
      }, {});
    },
    //子層有任一 collapse 打開，外層的 expandAll 就要為 true
    isExpandAllFn(){
      let isExpandObj = {};
      // isAnyCollapseOpen , isExpandAll 
       //如果this.collapseStates[key]全部都為 false isExpandAll 就要為 false
      if (Object.keys(this.collapseStates).every((key) => !this.collapseStates[key])) {
        this.isAnyCollapseOpen = false;
        this.isExpandObj = {
          isExpandAll: false,
          isAnyCollapseOpen: false
        }
      }

      if (Object.keys(this.collapseStates).every((key) => this.collapseStates[key])) {
        this.isAnyCollapseOpen = false;
        this.isExpandObj = {
          isExpandAll: true,
          isAnyCollapseOpen: false
        }
      }
      //如果this.collapseStates[key]任一為 true ,isExpandAll 就要為 true
      if (Object.keys(this.collapseStates).some((key) => this.collapseStates[key])) {
        this.isAnyCollapseOpen = true;
        this.isExpandObj = {
          isAnyCollapseOpen: true,
          isExpandAll: false,
        }
      }
      //如果this.collapseStates[key]任一為 false, 
      // if (Object.keys(this.collapseStates).some((key) => !this.collapseStates[key])) {
      //   isExpandObj = {
      //     oneOfCollapseOpen: false
      //   }
      // }
      this.$emit("emitExpandAll", this.isExpandObj);
      // return isExpandAll;
    }
  },
  watch:{
    "headerScrollValue"(newValue, oldValue){
      // console.log("headerScrollValue", newValue);
      if(newValue !== oldValue){
        this.dataset.forEach((item) => {
          this.$refs[`dataTableBody_${item.collapseId}`][0].scrollLeft = newValue;
        });
      }
    },
    listenCollapseChange(newValue, oldValue){
      console.log("listenCollapseChange", newValue, oldValue);
      if(newValue.isExpandAll === false && newValue.isAnyCollapseOpen === true) {
        console.log('this.collapseStates', this.collapseStates);
        return;
      }
      //關其中一個 collapse，不需要全部都關閉
      if(newValue.isExpandAll){
        this.dataset.forEach((item) => {
          this.collapseStates[item.collapseId] = true;
        });
      }
      if(!newValue.isExpandAll && !newValue.isAnyCollapseOpen){
        this.dataset.forEach((item) => {
          this.collapseStates[item.collapseId] = false;
        });
      }
    }
  },
  created() {
    
  },
  mounted(){
    this.$nextTick(function () {
      this.initializeCollapseStates();
    });
  }
}


</script>

<style lang="scss" scoped>
.collapse-title-box {
  width: 100%;
  position: sticky;
  z-index: 1; //注意
  background: #eeedec;
  top: 102px;
  display: flex;
  align-items: center;
}
.collapse-title {
  background: #fff;
  width: 100%;
  border-top-left-radius: .4em;
  border-top-right-radius: .4em;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  // justify-content: space-between;
}
.expand-icon {
  cursor: pointer;
}
.rotate-icon {
  transform: rotate(180deg);
}

.table {
  margin-bottom: 0px;
}

.dataTable-body {
  overflow: auto;
  width: 100%;
  background-color: #ccc;
  margin-bottom: .5rem;

  table {
    table-layout: fixed;
    width: 100%;
  }

  tbody td:nth-child(1) {
    position: sticky;
    left: 0;
    /* 首行永遠固定於左 */
    // z-index:1;
    background-color: lightpink;
  }

  tbody td:nth-child(2) {
    position: sticky;
    left: 100px;
    /* 首行永遠固定於左 */
    // z-index:1;
    background-color: lightpink;
  }
}
.rotate-icon {
  transform: rotate(180deg);
}

</style>

  <template>
   <main ref="container" class="content" >
        <div class="container-custom">
          <div class="jx-board jx-board-header export-header mb-0" >
            <div class="export-buttons">
                  <a
                
                    href="javascript:;"
                    class="btn btn-white"
              
                  >
                    <i class="la la-plus"></i>
                    <span>匯出累進月份</span>
                  </a>
                  <a
                
                    href="javascript:;"
                    class="btn btn-white"
              
                  >
                    <i class="la la-plus"></i>
                    <span>匯出個別月份</span>
                  </a>
                </div>
                <div class="column-dataInfo">
                  <div class="d-flex align-items-center">
                    <div class="">欄位顯示：</div>
                    <div class="select-column-data">
                      <!-- <FormElementWrap class="mb-0">
                        <SelectInput
                          :selected="selectedFieldDisplay.fieldDisplay"
                          :options="fieldDisplayOption"
                          @changeSelected="changeFieldDisplay('fieldDisplay', $event)"
                        ></SelectInput>
                      </FormElementWrap> -->
                          <!-- ///自製下拉選單  -->
                      <div class="p-3 mb-2 bg-gray-200 rounded">
                        <SelectNew :options="fieldDisplayOption"  v-model:selected-values="selectedFieldDisplay.fieldDisplay" :placeholder="'請選擇..'" :clearable="false" ></SelectNew>
                        <div>選到的 {{ selectedFieldDisplay.fieldDisplay }}</div>
                      </div>
                    </div>
                    <span class="text-muted pl-1 pr-1">|</span>
                    <div>
                      <div>目前顯示比數： 50 of 1,025 </div>
                    </div>
                    <span class="text-muted pl-1 pr-1">|</span>
                    <div class="icon" @click="handelExpandedAll">
                      <!-- isExpandAll -->
                      {{ checkRotateIcon }}
                      <button class="head-expand-icon" :class="[checkRotateIcon ? 'rotate-icon' : '']">&darr;</button>
                    </div>
                  </div>
                </div>
          </div>
      

          <div class="jx-board dataTable-header-box " >
            <div ref="dataTableHeader" class="jx-board-table dataTable-header" @scroll="syncBodyScroll">
              <table  class="table table-hover">
            
                <thead ref="tableHead">
                    <tr>
                      <th rowspan="2" :style="{ 'width': '100.97px' }">航線</th>
                      <th rowspan="2" :style="{ 'width': '100.97px' }">航空公司</th>
                      <th colspan="5" :style="{ 'width': '500.97px' }" class="text-center">總計</th>
                      <th colspan="5" :style="{ 'width': '500.97px' }" class="text-center" v-if="fieldDisplayName === '全部顯示'">入境</th>
                      <th colspan="5" :style="{ 'width': '500.97px' }" class="text-center" v-if="fieldDisplayName === '全部顯示'">出境</th>

                    </tr>
                    <tr class="table-head-second">
                        <th class="text-nowrap" >飛行架次(次)</th>
                        <th class=" text-nowrap" >座位總數(位)</th>
                        <th class=" text-nowrap" >載客人數(位)</th>
                        <th class=" text-nowrap">載客率L/F</th>
                        <th class=" text-nowrap" >競爭力</th>

                        <template v-if="fieldDisplayName === '全部顯示'">
                          <th class="text-nowrap" >飛行架次(次)</th>
                          <th class=" text-nowrap" >座位總數(位)</th>
                          <th class=" text-nowrap" >載客人數(位)</th>
                          <th class=" text-nowrap">載客率L/F</th>
                          <th class=" text-nowrap" >競爭力</th>
                        
                          <th class="text-nowrap" >飛行架次(次)</th>
                          <th class=" text-nowrap" >座位總數(位)</th>
                          <th class=" text-nowrap" >載客人數(位)</th>
                          <th class=" text-nowrap">載客率L/F</th>
                          <th class=" text-nowrap" >競爭力</th>
                        </template>
                      </tr>
                  </thead>
              </table>
            </div>
          </div>
          <TableCollapse 
            :dataset="dataset"
            :isExpandAll="isExpandAll"
            :headerScrollValue="headerScrollValue"
            @tableBodyScrollValue="getTableBodyScroll"
            @emitExpandAll="getExpandAll"
            ></TableCollapse>
          
          <div class="jx-board" v-for="(item, index) in dataset" :key="index">
            <!-- <div class="collapse-title-box" @click="collapseTestFn(item.collapseId)">
              <div class="collapse-title">
                {{ item.departureAirport }}
                <Icon class="expand-icon" :class="[collapseStates[item.collapseId] ? 'rotate-icon' : '']">expand_more</Icon>
              </div>
            </div> -->
             <!-- v-if="collapseStates[item.collapseId]" -->
            <div :ref="'dataTableBody_' + item.collapseId" class="dataTable-body" @scroll="syncHeaderScroll(item.collapseId, index)">
              <table class="table">
                <!-- <tbody>
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
                
      
                </tbody> -->
              </table>
            </div>
          </div>

  
      </div>
    </main>
  </template>

<script >
import TableCollapse from '../components/TableCollapse.vue'
import SelectNew from '../components/SelectNew.vue'

export default {
  props: {},
  components: {
    TableCollapse,
    SelectNew
  },
  data() {
    return {
      selectedFieldDisplay: { fieldDisplay: [] },
      fieldDisplayOption: [
        { label: '僅總計', value: 'total' },
        { label: '僅入境', value: 'arrival' },
        { label: '僅出境', value: 'departure' },
        { label: '全部顯示', value: 'all' }
      ],
      fieldDisplayName: '',
      // collapseStates: {
      //   // collapse1: true,
      //   // collapse2: false,
      //   // collapse3: false,
      //   // 可以添加更多的 collapse 状态
      // },
      isExpandAll: true,
      isAnyCollapseOpen: true,
      dataAllTwo: [
        {
          "departureAirport": "桃園",
          "numberOfData": 825,
          "total": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          },
          "departure": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          },
          "arrival": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          }
        },
        {
          "departureAirport": "松山",
          "numberOfData": 3,
          "total": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          },
          "departure": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          },
          "arrival": {
            "arrivalAirports": [
              {
                "name": "全部航線總計",
                "airline": "全部航空公司總計",
                "flights": 15436,
                "seats": 3954072,
                "passengers": 3261046,
                "passengerLoadFactor": 82.5,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "總計",
                "flights": 325,
                "seats": 107630,
                "passengers": 99939,
                "passengerLoadFactor": 92.9,
                "competitiveness": null
              },
              {
                "name": "洛杉磯",
                "airline": "中華",
                "flights": 86,
                "seats": 30736,
                "passengers": 28655,
                "passengerLoadFactor": 93.2,
                "competitiveness": 1.044
              },
              {
                "name": "洛杉磯",
                "airline": "長榮",
                "flights": 180,
                "seats": 58849,
                "passengers": 55858,
                "passengerLoadFactor": 94.9,
                "competitiveness": 1.022
              },
              {
                "name": "洛杉磯",
                "airline": "星宇",
                "flights": 59,
                "seats": 18054,
                "passengers": 15426,
                "passengerLoadFactor": 85.4,
                "competitiveness": 0.92
              }
            ]
          }
        }
      ],
      headerScrollValue: 0,
    }
  },
  computed: {
    dataset() {
      if (this.fieldDisplayName === '僅總計') {
        return this.onlyTotalData;
      }
      if (this.fieldDisplayName === '全部顯示') {
        ////
        // this.collapseStates = {}
        const processedData = this.dataAllTwo.map((item, index) => {
          const departureAirport = item.departureAirport;
          const numberOfData = item.numberOfData;
          const arrivalAirportsData = item.total.arrivalAirports.map(airportData => {
            const {
              name,
              airline,
              flights,
              seats,
              passengers,
              passengerLoadFactor,
              competitiveness
            } = airportData;

            const airportDataArrival = item.arrival.arrivalAirports.find(
              arrivalAirportData => arrivalAirportData.name === name
            );

            const airportDataDeparture = item.departure.arrivalAirports.find(
              departureAirportData => departureAirportData.name === name
            );
            //初始化每個collapse的狀態
            // this.collapseStates[`collapse${index + 1}`] = true;

            return {
              name,
              airline,
              flights,
              seats,
              passengers,
              passengerLoadFactor,
              competitiveness,
              flightsArrival: airportDataArrival.flights,
              seatsArrival: airportDataArrival.seats,
              passengersArrival: airportDataArrival.passengers,
              passengerLoadFactorArrival: airportDataArrival.passengerLoadFactor,
              competitivenessArrival: airportDataArrival.competitiveness,
              flightsDep: airportDataDeparture.flights,
              seatsDep: airportDataDeparture.seats,
              passengersDep: airportDataDeparture.passengers,
              passengerLoadFactorDep: airportDataDeparture.passengerLoadFactor,
              competitivenessDep: airportDataDeparture.competitiveness
            };
          });

          return {
            departureAirport,
            numberOfData,
            arrivalAirportsData,
            collapseId: `collapse${index + 1}`,
          };
        
        });
          console.log('processedData', processedData)
        return processedData;
      }
    },
    checkRotateIcon() {
      //如果全部關要為 false
      console.log('checkRotateIcon', 'isExpandAll',this.isExpandAll , 'isAnyCollapseOpen',this.isAnyCollapseOpen)
      //如果 this.isExpandAll 是 true 或 this.isAnyCollapseOpen 是 true 就要轉,但isExpandAll全關時，isAnyCollapseOpen 也要是 false
      // if(!this.isExpandAll){
      //   console.log('rotatejijijiji')
      //   return false
      // }
    
      return this.isAnyCollapseOpen ;
    },
  },
  methods: {
    syncHeaderScroll(id, index) {
      // const scrollLeftValue = this.$refs[`dataTableBody_${id}`][0].scrollLeft;
      // this.$refs.dataTableHeader.scrollLeft = scrollLeftValue;
      //滾動任一 dataTableBody 也要帶動其他 dataTableBody scroll
      // this.dataset.forEach((item) => {
      //   if (this.$refs[`dataTableBody_${item.collapseId}`][0] !== this.$refs[`dataTableBody_${id}`][0]) {
      //     this.$refs[`dataTableBody_${item.collapseId}`][0].scrollLeft = scrollLeftValue;
      //   }
      // });
    },
    syncBodyScroll() {
      const scrollLeftValue = this.$refs.dataTableHeader.scrollLeft;
      this.headerScrollValue = scrollLeftValue;
      // 同步所有的 dataTableBody 的滾動
      // this.dataset.forEach((item) => {
      //   // if (this.$refs[`dataTableBody_${item.collapseId}`][0] !== this.$refs.dataTableBody) {
      //   this.$refs[`dataTableBody_${item.collapseId}`][0].scrollLeft = scrollLeftValue;
      //   // }
      // });
      // 同步 dataTableHeader 的滾動
      this.$refs.dataTableHeader.scrollLeft = scrollLeftValue;
    },
    // collapseTestFn(collapseName) {
    //   console.log('close', collapseName);
    //   this.collapseStates[collapseName] = !this.collapseStates[collapseName];
    // },
    handelExpandedAll() {
      console.log('點擊 expand', this.isExpandAll);
      this.isExpandAll = !this.isExpandAll;
      this.isAnyCollapseOpen = this.isExpandAll;
      
    },
    changeFieldDisplay(key, value) {
      console.log('value', value);
      // 如果要有個預設值，要如何撰寫？
      this.selectedFieldDisplay[key] = [value];
      this.fieldDisplayName = value.name;

    },
    getTableBodyScroll(value){
      this.$refs.dataTableHeader.scrollLeft = value;
    },
    getExpandAll(value){
      console.log('control', value);
      // this.isOneCollapseExpand = false;
      // 只要有一個 true 要改變 icon，並不是要全部都是collapse 打開
      const { isExpandAll , isAnyCollapseOpen } = value
      // if(isAnyCollapseOpen){
        this.isAnyCollapseOpen = isAnyCollapseOpen
      // }
      // if(isExpandAll){
        this.isExpandAll = isExpandAll
      // }
      

      console.log('isAnyCollapseOpen', isAnyCollapseOpen, '2', this.isAnyCollapseOpen, 'isExpandAll', isExpandAll, '2', this.isExpandAll)

    }
  },
  mounted() {
    this.selectedFieldDisplay['fieldDisplay'] = [{ name: '全部顯示', value: 'All' }];
    this.fieldDisplayName = '全部顯示';

    // 初始化 collapseStates 为空对象
    this.collapseStates = {};

    // 为每个折叠区域添加属性并设置默认值
    // this.dataset.forEach((item) => {
    //   this.collapseStates = {
    //     ...this.collapseStates,
    //     [item.collapseId]: true, // 默认状态
    //   };
    // });
  },
  watch: {
  }
}
</script>
<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 2.4rem 0;
  width: calc(100% - 250px);
}

.container-custom {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.select-column-data {
  .multiselect {
    width: 130px;
  }

  .form-group {
    width: 130px;
  }

  .form-control {
    border: none;

    &:focus {
      border: none;
      outline: 0;
      box-shadow: none;
    }
  }
}

.export-header {
  position: sticky;
  top: calc(10px * 2);
  z-index: 3;
}

.dataTable-header-box {
  position: sticky;
  top: calc(10px * 2 + 74px);
  z-index: 2;
}

@media (min-width: 992px) {
  .jx-main-nav+.jx-content-wrapper .table thead th {
    top: 0;
  }
}

.table {
  margin-bottom: 0px;
}

.dataTable-header {
  overflow: auto;
  width: 100%;

  table {
    table-layout: fixed;
    width: 100%;
  }

  td,
  th {
    // border:1px solid #ccc;
    // height:30px;
  }

  thead tr th {
    position: sticky;
    top: 0;
    /* 列首永遠固定於上 */
  }

  .table-head-second {
    position: sticky;
    top: 10px;
    background: cadetblue;
  }

  thead tr th {
    position: sticky;
    top: 0;
    /* 列首永遠固定於上 */
  }

  th:first-child {
    position: sticky;
    left: 0;
    /* 首行永遠固定於左 */
    z-index: 2;

  }

  thead tr:nth-child(1) th:nth-child(2) {
    position: sticky;
    z-index: 2;
    left: 100px;
    background-color: lightpink;
  }
}

.dataTable-body-box {
  // position: sticky;
  // top: 320px;
  // z-index: 2;
  // margin-bottom: 30px;
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
    z-index:1;
    background-color: lightpink;
  }

  tbody td:nth-child(2) {
    position: sticky;
    left: 100px;
    /* 首行永遠固定於左 */
    z-index:1;
    background-color: lightpink;
  }
}

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
  justify-content: space-between;
}

.expand-icon {
  cursor: pointer;
}

.rotate-icon {
  transform: rotate(180deg);
}

// @media (max-width: 992px) {
//   .dataTable-header-box {
//     top: calc(10px * 2 + 120px);
//   }

//   .export-header {
//     top: calc(10px * 2);
//   }

//   .collapse-title-box {
//     top: calc(10px * 2 + 220px);
//   }
// }
</style>

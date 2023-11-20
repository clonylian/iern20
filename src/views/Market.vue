<template>
  <div class="mak_box">
    <div class="maeket_head">
      <img src="../assets/4.png">
    </div>
    <div class="maket">
      <div class="maket_one">
        <h2> Trending Tokens</h2>
        <div class="maket_bi">
          <div class="maket_two">
            <div class="maket_three">
              eth
              <img src="../assets/5.svg">
            </div>
            <div class="maket_four">
              <div class="maket_five">
                <p>$0.4559</p>
                <p>Floor Price</p>
              </div>
              <div class="maket_ten">

              </div>
              <div class="maket_six">
                <p>1120.0835 ETH</p>
                <p>Total Vol</p>
              </div>
            </div>
          </div>
          <div class="maket_two">
            <div class="maket_three">
              eth
              <img src="../assets/5.svg">
            </div>
            <div class="maket_four">
              <div class="maket_five">
                <p>$0.4559</p>
                <p>Floor Price</p>
              </div>
              <div class="maket_ten">

              </div>
              <div class="maket_six">
                <p>1120.0835 ETH</p>
                <p>Total Vol</p>
              </div>
            </div>
          </div>
          <div class="maket_two">
            <div class="maket_three">
              eth
              <img src="../assets/5.svg">
            </div>
            <div class="maket_four">
              <div class="maket_five">
                <p>$0.4559</p>
                <p>Floor Price</p>
              </div>
              <div class="maket_ten">

              </div>
              <div class="maket_six">
                <p>1120.0835 ETH</p>
                <p>Total Vol</p>
              </div>
            </div>
          </div>
          <div class="maket_two">
            <div class="maket_three">
              eth
              <img src="../assets/5.svg">
            </div>
            <div class="maket_four">
              <div class="maket_five">
                <p>$0.4559</p>
                <p>Floor Price</p>
              </div>
              <div class="maket_ten">

              </div>
              <div class="maket_six">
                <p>1120.0835 ETH</p>
                <p>Total Vol</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="cen_tab">
            <div class="content_two">
              <div class="content_three">
                <div class="content_four">
                  <p class="cont_fp" @click="changeTab('tab1')" :class="{ 'selected-tab': activeTab === 'tab1' }">
                    <svg t="1700457091582" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="27246" width="16" height="16">
                      <path d="M384.57 98.25h40v814.31h-40zM600.13 99.78h40v812.78h-40z" fill="#000000" p-id="27247">
                      </path>
                      <path d="M766.45 941.07l-254.15-12.5v-25l254.15 12.5v25z m0-25l-254.15 12.5v-25l254.15-12.5v25z"
                        fill="#000000" p-id="27248"></path>
                      <path
                        d="M258.1 891.07l254.21 12.5v25l-254.21-12.5v-25z m0 25l254.21-12.5v25l-254.21 12.5v-25zM766.45 137.26l-253.92-12.5v-25l253.92 12.5v25z m0-25l-253.92 12.5v-25l253.92-12.5v25z"
                        fill="#000000" p-id="27249"></path>
                      <path d="M258.1 87.26l254.44 12.5v25l-254.44-12.5v-25z m0 25l254.44-12.5v25l-254.44 12.5v-25z"
                        fill="#000000" p-id="27250"></path>
                    </svg>
                    IERC-20
                  </p>
                  <p class="cont_fp1" @click="changeTab('tab2')" :class="{ 'selected-tab': activeTab === 'tab2' }">
                    <svg t="1700456962318" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="22552" width="16" height="16">
                      <path
                        d="M506.06 0h6.58c8.78 1.1 16.7 6.3 21.14 13.96 40.36 63.12 80.94 126.1 121.26 189.26 5.06 7.14 2.18 18.18-5.84 21.8-6.96 3.66-16.02 0.56-19.78-6.2-22.22-34.48-44.16-69.14-66.54-103.54 15.98 48.4 32.44 96.64 48.4 145.04 2.9 7.7-1.9 16.94-9.76 19.16-7.72 2.64-16.66-2.36-18.8-10.16-24.24-72.02-48.16-144.16-72.46-216.16-2.06 3.84-3.52 7.94-4.74 12.1-41.32 123.58-82.74 247.14-124.06 370.72 85.66 0.04 171.32 0.02 257 0-11.54-34.7-23.3-69.34-34.76-104.06-3.66-8.68 2.88-19.4 12.24-20.16 7.62-1.18 14.78 4.5 16.58 11.74 12.88 38.66 25.96 77.28 38.74 115.98 44.76 18.34 89.7 36.24 134.52 54.42-23.6-36.92-47.34-73.78-70.96-110.68-2.9-4.24-4.02-9.84-1.94-14.68 2.72-7.26 11.6-11.38 18.88-8.6 4.4 1.3 7.16 5.16 9.52 8.8 27.82 43.52 55.78 86.94 83.6 130.46 5.98 8.82 6.1 21.02 0.24 29.94-103.68 160.32-207.58 320.52-311.28 480.82-4.44 7.6-12.26 12.78-20.96 14.04h-5.52c-8.32-1.12-16.1-5.66-20.5-12.9-69.44-107.2-138.82-214.46-208.3-321.64-3.3-5.32-8.14-10.74-7.1-17.48 0.84-8.6 10.1-15.02 18.44-12.7 4.62 0.92 7.94 4.48 10.34 8.3 57.06 88.18 114.18 176.34 171.28 264.52-16.46-62.76-33.02-125.48-49.48-188.24-2.98-7.98 1.76-17.76 10.16-19.78 8.44-2.64 17.5 3.7 18.92 12.2 19.6 74.6 39.24 149.18 58.84 223.8 43.28-164.66 86.6-329.3 129.88-493.94-86.58 0-173.18-0.02-259.76 0 5.74 22.14 11.72 44.24 17.4 66.4 2.44 7.68-2.38 16.58-10.18 18.64-7.62 2.48-16.58-2.38-18.54-10.18-6.4-23.1-12.06-46.42-18.48-69.52-46.78 18.92-93.66 37.58-140.34 56.7 17.78 27.5 35.64 54.96 53.4 82.48 4.72 6.16 4.08 15.66-1.98 20.72-6.72 6.32-18.5 4.04-22.9-3.92-21.26-32.74-42.5-65.5-63.66-98.32-5.94-8.94-5.78-21.24 0.3-30.06C279.02 337.02 382.94 174.94 486.88 12.9c4.14-6.92 11.42-11.22 19.18-12.9M214.14 493.9c44.82-17.86 89.5-36.12 134.3-54.08 36.22-108.12 72.48-216.2 108.52-324.38-81.16 126.02-161.86 252.32-242.82 378.46m334.3 438.16c87.22-134.62 174.36-269.3 261.6-403.92-46.82-18.94-93.58-38.08-140.54-56.68-40.32 153.54-80.78 307.04-121.06 460.6zM268.78 40.84c6.1-3.34 14.32-1.56 18.54 3.92 9.58 11.78 19.1 23.6 28.44 35.56 5.7 6.94 3.02 18.42-4.98 22.34-6.3 3.46-14.76 1.4-18.98-4.36-9.48-11.82-19.06-23.6-28.34-35.58-5.38-6.96-2.54-18.08 5.32-21.88zM742.44 40.36c11.64-5.76 25.28 7.92 19.72 19.54-6.58 10.52-15.3 19.56-22.76 29.46-5.26 6.22-10 15.32-19.4 15-11.14 0.42-19.06-13.64-12.56-22.82 8.22-11.04 17.18-21.52 25.62-32.4 2.72-3.28 5.24-7.16 9.38-8.78zM142.62 212.76c4.92-2.44 10.8-1.4 15.28 1.52 10.02 5.94 20.18 11.7 30.14 17.78 7.62 4.26 9.68 15.52 3.96 22.16-4.52 5.8-13.32 7.32-19.54 3.4-10.88-6.4-21.92-12.58-32.62-19.3-9.08-6.1-7.32-21.5 2.78-25.56zM868.76 212.9c6.92-3.68 16.24-0.38 19.7 6.56 3.62 6.62 1.18 15.74-5.34 19.58-10.44 6.36-21.02 12.52-31.64 18.6-6.6 4.18-16.08 2.08-20.26-4.52-4.8-6.7-2.48-17.02 4.7-21.02 10.92-6.44 21.74-13.06 32.84-19.2z"
                        p-id="22553" fill="#2c2c2c"></path>
                      <path
                        d="M700.86 221.06c9.66-2.02 19.92 2.56 25.38 10.68 8.5 12.06 19.66 21.88 31.48 30.6 11.58 8.94 11.5 28.38 0.04 37.38-7.24 5.44-15.32 9.9-21.38 16.78-7.18 6.8-10.56 17.36-19.82 21.92-10.92 5.84-25.78 1.66-31.98-9.08-7.06-11.98-18.2-20.66-29.84-27.88-13.34-8.6-13.84-30.3-0.8-39.4 11.34-7.72 22.16-16.66 29.68-28.28 3.82-6.28 9.82-11.48 17.24-12.72m-21.94 60.06c10.02 7.28 19.26 15.64 26.7 25.58a107.56 107.56 0 0 1 26.56-25.74c-9.5-8.02-18.68-16.48-26.36-26.28-7.64 10.06-16.7 19-26.9 26.44zM66.96 497.3c11.36-0.64 22.82-0.6 34.16-0.02 11.04 1.48 16.22 16.46 8.58 24.52-6.38 7.56-17.12 4.76-25.72 5.26-8.6-0.44-19.4 2.24-25.66-5.46-7.4-8.1-2.2-22.74 8.64-24.3zM922.96 497.26c10.92-0.64 21.94-0.4 32.88-0.12 11.44 0.66 17.58 16 9.82 24.44-6.22 7.7-17 5.04-25.56 5.48-8.66-0.5-19.5 2.32-25.88-5.32-7.58-8.12-2.32-23.08 8.74-24.48zM410.8 575.2c9.78-2.8 20.84 1.26 26.64 9.56 6.74 9.14 14.44 17.62 23.42 24.6 5.48 4.42 12.1 8.18 15.04 14.92 5.28 10.64 1.28 24.62-8.72 30.98-7.92 5.14-15.76 10.64-21.76 18.04-5.36 6.02-8.62 14.16-15.92 18.22-10.34 6.26-25.18 3.26-32-6.82-4.94-7.6-10.56-14.86-17.86-20.36-6.8-5.92-16.36-9.06-20.62-17.52-5.7-10.2-2.8-24.3 6.78-31.12 10.08-6.96 19.92-14.62 27.08-24.68 4.44-6.7 9.6-13.92 17.92-15.82m-20.18 59.78c10.16 7.02 19.26 15.54 26.7 25.4 7.42-10.02 16.5-18.7 26.66-25.88-9.68-7.74-18.66-16.38-26.4-26.08-7.64 10.1-16.78 19-26.96 26.56zM174.78 765.24c7.54-3.42 17.16 1.12 19.68 8.92 2.4 6.46-0.42 14.26-6.38 17.74-10.44 6.3-20.96 12.48-31.54 18.54-6.58 4.08-16 2-20.14-4.56-5.14-7.02-2.16-17.86 5.58-21.64 10.98-6.22 21.62-13.12 32.8-19zM838.74 764.96c4.74-1.86 10.02-0.52 14.18 2.14 10.04 6.02 20.32 11.66 30.24 17.88 7.04 4.12 9.16 14.36 4.42 20.98-4.2 6.48-13.58 8.58-20.12 4.46-10.92-6.38-21.96-12.62-32.68-19.32-9.7-6.34-7.06-22.86 3.96-26.14zM298.3 920.68c6.62-2.78 14.84 0.08 18.42 6.28 3.52 5.6 2.44 13.16-1.9 18-9.18 11.42-18.22 22.96-27.52 34.28-4.8 6.24-14.72 7.48-20.82 2.42-6.16-4.56-7.72-14.12-3.12-20.28 8.04-10.58 16.64-20.76 24.8-31.26 2.94-3.54 5.64-7.74 10.14-9.44zM714.66 920.68c6.14-2.6 13.68-0.28 17.6 5.06 8.38 10.32 16.6 20.8 25 31.14 2.66 3.38 5.68 6.96 5.98 11.48 0.82 7.14-4.24 14.34-11.22 16.02-6.08 1.62-12.66-1.16-16.26-6.18-9.12-11.42-18.32-22.8-27.32-34.3-6.42-7.34-2.88-20 6.22-23.22z"
                        p-id="22554" fill="#2c2c2c"></path>
                    </svg>
                    Ethscriptions
                  </p>
                </div>
                <div class="content_five">
                  <el-input v-model="search" size="mini" placeholder="" />
                  <div class="content_six">
                    search
                  </div>
                </div>
              </div>
              <div v-show="activeTab === 'tab1'" class="conent_seven">
                <el-table :data="currentPageData" style="width: 100%">
                  <el-table-column label="Tick" prop="Tick">
                    <template v-slot="scope">
                      <p @click="Trade(scope.$index, scope.row)" class="scopeneme">
                        {{ scope.row.Tick }}
                      </p>
                    </template>
                  </el-table-column>
                  <el-table-column label="Holders" prop="Holders" sortable>
                    <template v-slot="scope">
                      <p @click="Trade(scope.$index, scope.row)">
                        {{ scope.row.Holders }}
                      </p>
                    </template>
                  </el-table-column>
                  <el-table-column label="Progress" prop="Progress" sortable>
                    <template v-slot="scope">
                      <div class="paress" @click="Trade(scope.$index, scope.row)">
                        <div class="Progrex">
                          100%
                          <div class="Progre">
                          </div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="address" prop="address" sortable>
                    <template v-slot="scope">
                      <p @click="Trade(scope.$index, scope.row)">
                        {{ scope.row.address }}
                      </p>
                    </template>
                  </el-table-column>
                  <el-table-column label="TotalSupply" prop="TotalSupply" sortable>
                    <template v-slot="scope">
                      <p @click="Trade(scope.$index, scope.row)">
                        {{ scope.row.TotalSupply }}
                      </p>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-container">
                  <el-pagination class="fenye" :page-size="pageSize" :total="filteredData.length"
                    @current-change="handleCurrentChange">
                    <template v-slot:total>
                      <!-- <span class="total-text">Total {{ filteredData.length }}</span> -->
                    </template>
                  </el-pagination>
                </div>
              </div>
              <div style="margin-bottom: 2rem;" v-show="activeTab === 'tab2'">
                <el-table :data="currentPageDatas" style="width: 100%">
                  <el-table-column label="Tick" prop="Tick">
                    <template v-slot="scope">
                      <p class="scopeneme">
                        {{ scope.row.Tick }}
                      </p>
                    </template>
                  </el-table-column>
                  <el-table-column label="Holders" prop="Holders" sortable></el-table-column>
                  <el-table-column label="Progress" prop="Progress" sortable>
                    <div class="Progrex">
                      100%
                      <div class="Progre">
                      </div>
                    </div>
                  </el-table-column>
                  <el-table-column label="address" prop="address" sortable></el-table-column>
                  <el-table-column label="TotalSupply" prop="TotalSupply" sortable></el-table-column>

                </el-table>
                <div class="pagination-container">
                  <el-pagination class="fenye" :page-size="pageSize" :total="filteredDatas.length"
                    @current-change="handleCurrentChanges">
                    <template v-slot:total>
                      <!-- <span class="total-text">Total {{ filteredData.length }}</span> -->
                    </template>
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎2',
          DeployTime: '2016-05-02',
          address: '4,000,00',
          Progress: '100%',
          Holders: '2023-7-2',
          TotalSupply: 3200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
      ],
      tableDatas: [
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎2',
          DeployTime: '2016-05-02',
          address: '4,000,00',
          Progress: '100%',
          Holders: '2023-7-2',
          TotalSupply: 3200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-12',
          TotalSupply: 4200,
        },
        ,
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-13',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-13',
          TotalSupply: 4200,
        },

        ,
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-13',
          TotalSupply: 4200,
        },
        ,
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-13',
          TotalSupply: 4200,
        },
        ,
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02',
          address: '21,000,00',
          Progress: '100%',
          Holders: '2023-7-13',
          TotalSupply: 4200,
        },
      ],
      search: '',
      currentPage: 1,
      pageSize: 5,
      currentPages: 1,
      pageSizes: 5,
      activeTab: 'tab1',
    };
  },
  computed: {
    filteredData() {
      return this.tableData.filter(data => {
        if (!this.search) {
          return true;
        }
        if (data.Tick && typeof data.Tick === 'string') {
          return data.Tick.toLowerCase().includes(this.search.toLowerCase());
        }
        return false;
      });
    },
    filteredDatas() {
      return this.tableDatas.filter(data => {
        if (!this.search) {
          return true;
        }
        if (data.Tick && typeof data.Tick === 'string') {
          return data.Tick.toLowerCase().includes(this.search.toLowerCase());
        }
        return false;
      });
    },
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredData.slice(startIndex, endIndex);
    },
    currentPageDatas() {
      const startIndex = (this.currentPages - 1) * this.pageSizes;
      const endIndex = startIndex + this.pageSizes;
      return this.filteredDatas.slice(startIndex, endIndex);
    },
  },
  methods: {
    Trade(index, row) {
      console.log(index, row)
      localStorage.setItem('Tradename', JSON.stringify(row));
      this.$router.push('/Trade');
    },
    changeTab(tab) {
      this.activeTab = tab;
    },
    handleEdit(index, row) {
      console.log('Edit', index, row);
      // 执行编辑操作
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    handleCurrentChanges(page) {
      this.currentPages = page;
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: one;
  src: url('../assets/1.ttf');
}

@font-face {
  font-family: three;
  src: url('../assets/2.ttf');
}

@font-face {
  font-family: two;
  src: url('../assets/3.ttf');
}

.paress {
  width: 100%;
}

.selected-tab {
  background-color: #000;
  color: #fff;
}
.selected-tab svg path {
    fill: #fff;
    /* 选中状态下修改SVG的颜色 */
}


.mak_box {
  width: 100%;
  height: auto;
}

.maeket_head {
  width: 100%;
  height: 17rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.maeket_head img {
  width: 1040px;
  height: 260px;
}

.maket {
  width: 100%;
  height: auto;
}

.maket_one {
  width: 70%;
  margin: 0 auto;
}

.maket_one>h2 {
  margin: 3rem 0;
  font-size: 30px;
  font-weight: 600;
  font-family: one;
}

.maket_two {
  width: 23.5%;
  box-sizing: border-box;
  border: 2px rgb(177, 177, 177) solid;
  border-radius: 15px;
  font-family: one;
}

.maket_three {
  padding: 1.5rem 0;
  text-align: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: rgb(243, 243, 243);
}

.maket_four {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.maket_five {
  width: 49%;
  display: flex;
  padding: 1rem 0rem;
  /* margin: 1rem 0; */
  flex-direction: column;
  align-items: center;

}

.maket_six {
  width: 49%;
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: center;
}

.maket_ten {
  height: 0.5rem;
  padding: 1rem 0;
  border-right: 1px rgba(177, 177, 177) solid;
}

.maket_bi {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.maket_two:hover {
  border: 2px black solid;
}

.maket_two:hover .maket_four {
  background-color: black;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.maket_two:hover .maket_ten {
  height: 0.5rem;
  padding: 1rem 0;
  border-right: 1px white solid;
  border-bottom: 15px;
}

.cen_tab {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {}

.content_two {
  width: 100%;
  margin: 0 auto;
  border: 1px rgb(225, 228, 232) solid;
  padding: 2rem;
  border-radius: 15px;
}

.el-pagination {
  /* flex-direction: row-reverse */
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.content_three {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  /* flex-direction: column; */
}

.content_four {
  width: 20rem;
  height: 3rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border-radius: 30px;
  border: 1px rgb(243, 243, 243) solid;
  align-items: center;
}

.cont_fp {
  margin-right: 1rem;
  padding: 0.5rem 1.5rem;
  /* background-color: black; */
  /* color: white; */
  border-radius: 30px;
  display: flex;
  align-items: center;
}


.cont_fp1 {
  padding: 0.5rem 1.5rem;
  /* background-color: black; */
  /* color: white; */
  border-radius: 30px;
  display: flex;
  align-items: center;
}

.content_five {
  width: 18rem;
  display: flex;
  align-items: center;
  height: 3rem;
}

.el-input {
  height: 3rem;
}

.content_six {
  background-color: black;
  color: white;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

}

.conent_seven {
  width: 100%;
  /* margin-top: 1rem; */
  margin: 2rem auto;
  text-align: center;
}

.Progrex {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Progre {
  width: 80%;
  height: 0.4rem;
  background-color: rgb(69, 114, 253);
  border-radius: 5px;
}

::v-deep .el-table__body-wrapper .el-table__row {
  height: 5rem;
  /* 设置行高为 60px，你可以根据需要进行调整 */
}


.tarde {
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 30px;
  text-align: center;
  color: white;
  line-height: 3rem;
  font-size: 18px;
}

.scopeneme {
  color: rgb(63, 113, 253);
  font-weight: 900;
  font-size: 18px;
}

::v-deep .el-table .cell {
  text-align: center;
}

@media (max-width: 600px) {
  .maeket_head img {
    width: 90%;
    height: auto;
  }

  .maeket_head {
    height: auto;
  }

  .maket_bi {
    flex-direction: column;
  }

  .maket_two {
    width: 90%;
    margin-bottom: 2rem
  }

  .maket_one {
    width: 100%;
  }

  .maket_one>h2 {
    text-align: center;
  }

  .content_three {
    align-items: center;
    flex-direction: column
  }

  .content_five {
    margin-top: 2rem;
  }
}</style>
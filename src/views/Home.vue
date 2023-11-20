<template>
  <div class="hello">
    <div class="center">
      <h3>Check Out The ETH Inscription Token Balance Of The Address.</h3>
      <div class="center_one">
        <input v-model="search" placeholder="Search by address">
        <svg t="1700197252775" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="12841" width="16" height="16">
          <path
            d="M989.873231 897.220923C1012.913231 920.300308 1012.913231 957.715692 989.873231 980.755692 966.793846 1003.835077 929.378462 1003.835077 906.299077 980.755692L655.655385 730.112C655.025231 729.481846 654.788923 728.576 654.198154 727.906462 586.929231 781.469538 501.897846 813.686154 409.225846 813.686154 191.704615 813.686154 15.379692 637.361231 15.379692 419.84 15.379692 202.318769 191.704615 25.993846 409.225846 25.993846 626.747077 25.993846 803.072 202.318769 803.072 419.84 803.072 502.665846 777.353846 579.465846 733.676308 642.875077 735.448615 644.292923 737.575385 644.962462 739.229538 646.577231L989.873231 897.220923ZM409.225846 104.763077C235.224615 104.763077 94.148923 245.799385 94.148923 419.84 94.148923 593.841231 235.224615 734.916923 409.225846 734.916923 583.227077 734.916923 724.302769 593.841231 724.302769 419.84 724.302769 245.799385 583.227077 104.763077 409.225846 104.763077Z"
            p-id="12842" fill="#2c2c2c"></path>
        </svg>
      </div>
      <div class="cen_tab">
        <div class="content_two">
          <div class="content_three">
            <div class="content_four">
              <p class="cont_fp" @click="changeTab('tab1')" :class="{ 'selected-tab': activeTab === 'tab1' }">IERC-20</p>
              <p class="cont_fp1" @click="changeTab('tab2')" :class="{ 'selected-tab': activeTab === 'tab2' }">
                Ethscriptions</p>
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
                  <p class="scopeneme" @click="tick(scope.$index, scope.row)">
                    {{ scope.row.Tick }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="DeployTime" prop="DeployTime" sortable>
                <template v-slot="scope">
                  <p style="color: black;" @click="tick(scope.$index, scope.row)">
                    {{ scope.row.DeployTime }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="Progress" prop="Progress" sortable>
                <template v-slot="scope">
                  <div class="Progrex" @click="tick(scope.$index, scope.row)">
                    100%
                    <div class="Progre">
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="Holders" prop="Holders" sortable>
                <template v-slot="scope">

                  <p @click="tick(scope.$index, scope.row)" style="color: black;">
                    {{ scope.row.Holders }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="TotalSupply" prop="TotalSupply" sortable>
                <template v-slot="scope">
                  <p style="color: black;" @click="tick(scope.$index, scope.row)">
                    {{ scope.row.TotalSupply }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column align="right">
                <template v-slot="scope">
                  <p class="tarde" href="https://www.ierc20.com/market/ethi" @click="handleEdit(scope.$index, scope.row)">
                    Tarde</p>
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
            <el-table :data="currentPageDatat" style="width: 100%">
              <el-table-column label="Tick" prop="Tick">
                <template v-slot="scope">
                  <p @click="tick(scope.$index, scope.row)" class="scopeneme">
                    {{ scope.row.Tick }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="DeployTime" prop="DeployTime" sortable>
                <template v-slot="scope">
                  <p @click="tick(scope.$index, scope.row)" style="color: black;">
                    {{ scope.row.DeployTime }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="Progress" prop="Progress" sortable>
                <template v-slot="scope">
                  <div @click="tick(scope.$index, scope.row)" class="Progrex">
                    100%
                    <div class="Progre">
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="Holders" prop="Holders" sortable>
                <template v-slot="scope">

                  <p @click="tick(scope.$index, scope.row)" style="color: black;">
                    {{ scope.row.Holders }}
                  </p>

                </template>
              </el-table-column>
              <el-table-column label="TotalSupply" prop="TotalSupply" sortable>
                <template v-slot="scope">
                  <p @click="tick(scope.$index, scope.row)" style="color: black;">
                    {{ scope.row.TotalSupply }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column align="right">
                <template v-slot="scope">
                  <p class="tarde" href="https://www.ierc20.com/market/ethi" @click="handleEdit(scope.$index, scope.row)">
                    Tarde</p>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination-container">
              <el-pagination class="fenye" :page-size="pageSizet" :total="filteredDatat.length"
                @current-change="handleCurrentChanget">
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02 17.51.51',
          Holders: '21,000,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02 17.51.41',
          Holders: '21,000,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02 17.51.41',
          Holders: '21,000,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎2',
          DeployTime: '2016-05-02 17.51.21',
          Holders: '4,000,00',
          Progress: '100%',
          TotalSupply: 3200,
        },
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02 17.31.41',
          Holders: '21,000,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
      ],
      tableDatat: [
        {
          Tick: '王小虎1',
          DeployTime: '2016-05-02 14.31.41',
          Holders: '21,100,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎2',
          DeployTime: '2016-05-02 5.31.41',
          Holders: '21,200,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎3',
          DeployTime: '2016-05-02 8.31.41',
          Holders: '21,300,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎4',
          DeployTime: '2016-05-02 9.31.41',
          Holders: '4,400,00',
          Progress: '100%',
          TotalSupply: 3200,
        },
        {
          Tick: '王小虎5',
          DeployTime: '2016-05-02 13.31.41',
          Holders: '21,500,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
        {
          Tick: '王小虎6',
          DeployTime: '2016-05-02 14.11.41',
          Holders: '21,600,00',
          Progress: '100%',
          TotalSupply: 4200,
        },
      ],
      search: '',
      searchx:'',
      currentPage: 1,
      pageSize: 5,
      currentPaget: 1,
      pageSizet: 5,
      activeTab: 'tab1',
    };
  },
  computed: {
    filteredData() {
      return this.tableData.filter(data => {
        if (!this.search ) {
          return true;
        }
        if (data.Tick && typeof data.Tick === 'string') {
          return data.Tick.toLowerCase().includes(this.search.toLowerCase());
        }
        return false;
      });
    },
    filteredDatat() {
      return this.tableDatat.filter(data => {
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
    currentPageDatat() {
      const startIndex = (this.currentPaget - 1) * this.pageSizet;
      const endIndex = startIndex + this.pageSizet;
      return this.filteredDatat.slice(startIndex, endIndex);
    },
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    handleEdit(index, row) {
      console.log('Edit', index, row);
      console.log(row);
      localStorage.setItem('userName', JSON.stringify(row));
      this.$router.push('/Trade');
    },
    tick(index, row) {
      console.log(index, row)
      localStorage.setItem('tickname', JSON.stringify(row));
      this.$router.push('/tick');
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },

    handleCurrentChanget(page) {
      this.currentPaget = page;
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

.selected-tab {
  background-color: #000;
  color: #fff;
}

.hello {
  width: 100%;
  height: auto;
}

.head {
  width: 100%;
  height: 4rem;
  padding: 1rem 0;
  background-color: black;
  color: white;
}

.head_1 {
  width: 150px;
  height: 40px;
}

.head_box {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  justify-content: space-between;
}

.head_txt {
  display: flex;
  font-family: two;
  font-weight: 500;
  align-items: center;
}

.head_txt>p {
  padding: 0.3rem 0.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
}

.head_txt>p:hover {
  opacity: 0.6;
}

.head_txt>p>svg {
  fill: #fff;
}

.head_tbiao {
  display: flex;
  margin-left: 7rem;
  align-items: center
}

.head_tbiao>svg {
  width: 25px;
  height: 25px;
  opacity: 0.5;
  margin: 0 0.7rem;
}

.head_tbiao>svg:hover {
  opacity: 1;
}

.head_right {
  width: 10rem;
  border-radius: 30px;
  text-align: center;
  font-size: 18px;
  padding: 0.7rem 1rem;
  background-color: rgb(69, 113, 252);

}

.center {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: two;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center>h3 {
  font-family: three;
  font-size: 24px;
  font-weight: 600;
  text-transform: capitalize;
}

.center_one {
  width: 50%;
  height: 3.5rem;
  display: flex;
  border: 2px black solid;
  margin-top: 3.5rem;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
}

.center_one>input {
  width: 80%;
  border: none;
  outline: none;
  font-size: 22px;
  /* margin-left: 1rem; */
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
  width: 80%;
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
  width: 18rem;
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
}

.cont_fp1 {
  padding: 0.5rem 1.5rem;
  /* background-color: black; */
  /* color: white; */
  border-radius: 30px;
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
  line-height: 2.5rem;
  font-size: 18px;
  width: 6rem;
  height: 2.5rem;
  cursor: pointer;
}

::v-deep .el-table .cell {
  display: flex;
  justify-content: center
}

.scopeneme {
  color: rgb(63, 113, 253);
  font-weight: 900;
  font-size: 18px;
}

::v-deep .el-table .cell {
  text-align: center;
}

.button {
  /* height: 6rem; */
  padding-top: 6rem;
  width: 100%;
  font-family: two;
  display: flex;
  justify-content: center;

}

.button1 {
  width: 80%;
  /* margin-top: 6rem; */
  border-top: 1px black solid;
  display: flex;
  padding: 3rem 0;
  justify-content: space-between;

}

.button1>p {
  opacity: 0.5;
}


.button2>p {
  opacity: 0.5;
}

.button3 {
  font-weight: 900;
}

.button3:hover {
  color: rgb(69, 114, 253);
}

.tick {
  display: inline;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

@media (max-width: 600px) {
  .cen_tab {
    width: 100%;
  }

  .content_three {
    flex-direction: column;
  }

  .content_four {
    margin-bottom: 2rem;
  }

  .head_txt>p {
    display: none;
  }

  .head_tbiao {
    display: none;
  }

  .head_right {
    width: 7rem;
    font-size: 14px;
  }

  .center_one {
    width: 80%;
  }
}
</style>

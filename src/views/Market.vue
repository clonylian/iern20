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
                  <p class="cont_fp" @click="changeTab('tab1')" :class="{ 'selected-tab': activeTab === 'tab1' }">IERC-20
                  </p>
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

.selected-tab {
  background-color: #000;
  color: #fff;
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
  .maket_one>h2{
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
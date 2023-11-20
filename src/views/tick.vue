<template>
    <div class="tack">
        <div class="tack_one">
            <div class="Teade_two">
                <svg @click="gohome" t="1700281277119" class="icon" viewBox="0 0 1028 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="12693" width="16" height="16">
                    <path
                        d="M213.659 532.266l211.407 212.056c4.787 4.8 11.165 7.434 17.95 7.434 6.836 0 13.265-2.673 18.102-7.511 9.203-9.219 10.107-23.64 2.165-33.759l-171.945-172.531 502.568 0c14.028 0 25.447-11.469 25.447-25.574s-11.419-25.563-25.447-25.562l-502.555 0 176.107-176.603c5.296-10.54 3.653-22.709-4.253-30.641-4.735-4.735-11.139-7.332-18.038-7.333-7.587 0-14.83 3.055-20.381 8.605l-14.106 14.093-38.712 38.841-7.307 7.178-150.979 151.525c-5.002 5.028-7.537 11.915-7.166 19.4l0.026 0.496-0.025 0.509c-0.369 7.498 2.164 14.386 7.142 19.374l0 0zM213.659 532.266z"
                        fill="#272636" p-id="12694"></path>
                </svg>
            </div>
            <div class="Teade_three">
                <h1>{{ tickname && tickname.Tick }}</h1>
                <div class="Teade_tree">
                    IERC-20
                </div>
            </div>
        </div>
        <div class="Teade_four">
            <div class="Teade_five">
            </div>
            <h2 class="Teade_fi">100%</h2>
        </div>
        <div class="over_txt">
            <div class="over_txt1">
                <div class="over_txt2">
                    <h2>Overview</h2>
                </div>
                <div class="over_txt3">
                    <div class="over_txt4">
                        Transfer
                    </div>
                    <div @click="Trade" class="over_txt5">
                        Trade
                    </div>
                </div>
            </div>
            <div class="over_txt6">
                <div class="over_txt7">
                    <p class="over_txt8">Supply</p>
                    <p>{{ tickname && tickname.address }}</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Limit per mint</p>
                    <p>1,000</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Max minting times for a <br>
                        single address</p>
                    <p>10</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Decimal</p>
                    <p>8</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Deploy By</p>
                    <a target="_blank" href="https://etherscan.io/address/0xb3a6c05c1b795b08c9ed936478a244529eda20c0">
                        <p class="over_txt9">
                            0xb3a6c05c1b795b08c9ed936478a244529eda20c0
                            <img src="../assets/8.svg">
                        </p>
                    </a>

                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Deploy Time</p>
                    <p>{{ tickname && tickname.DeployTime }}</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Holders</p>
                    <p>
                        {{ tickname && tickname.TotalSupply }}</p>
                </div>
                <div class="over_txt7" style="margin-bottom: 2rem;">
                    <p class="over_txt8">Total Transactions</p>
                    <p>
                        39,714</p>
                </div>
            </div>
        </div>
        <div class="tick_one">
            <div class="tick_two">
                <div class="tick_three">
                    <p @click="changeTab('tab1')" :class="{ 'selected-tab': activeTab === 'tab1' }">Holders</p>
                    <p @click="changeTab('tab2')" :class="{ 'selected-tab': activeTab === 'tab2' }">Transactions</p>
                </div>
            </div>
            <div class="tick_four" v-show="activeTab === 'tab1'">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="Rank" label="Rank" width="200">
                    </el-table-column>
                    <el-table-column prop="Address" label="Address" width="240">
                        <template v-slot="scope">
                            <p class="scopeneme">
                                {{
                                    scope.row.Address.substr(0, 4) +
                                    "...." +
                                    scope.row.Address.substr(-4) }}
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Percentage" label="Percentage" width="600">
                        <template #default="scope">
                            <p style="margin: 0.5rem 0;">{{ scope.row.Percentage }}</p>
                            <div class="progress-container">
                                <div class="progress-bar" :style="{ width: getProgressWidth(scope.row.Percentage) }"></div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Balance" label="Balance">
                    </el-table-column>
                </el-table>
            </div>
            <div v-show="activeTab === 'tab2'">
                <el-table :data="Orders" style="width: 100%">
                    <el-table-column label="Date Time">
                        <template v-slot="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.DateTime }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Method">
                        <template v-slot="scope">
                            <p style="width: 3rem; border-radius: 5px; background-color: rgb(235, 235, 235);">
                                {{ scope.row.Method }}
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column label="Amount">
                        <template v-slot="scope">
                            {{ scope.row.Amount }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Unit Price">
                        <template v-slot="scope">
                            {{ scope.row.UnitPrice }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Total Value">
                        <template v-slot="scope">
                            {{ scope.row.TotalValue }}
                        </template>
                    </el-table-column>
                    <el-table-column label="buyer">
                        <template v-slot="scope">
                            {{
                                scope.row.buyer.substr(0, 4) +
                                "...." +
                                scope.row.buyer.substr(-4) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Seller">
                        <template v-slot="scope">
                            {{
                                scope.row.Seller.substr(0, 4) +
                                "...." +
                                scope.row.Seller.substr(-4) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Hash">
                        <template v-slot="scope">
                            <div>
                                <a target="_blank"
                                    href="https://etherscan.io/tx/0x5783500a6697e092aa8b662539402a2a47fb7ea76f57c21b55acfde44c5f51fc">
                                    <img src="../assets/8.svg">
                                </a>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="fenyes">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="Orders.length">
                    </el-pagination>
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
                    Rank: '1',
                    Address: '0x68aa8c7873478886bac0700cc80c11e75fe08cb6',
                    Percentage: '2.8285%',
                    Balance: '594,000',
                },
                {
                    Rank: '2',
                    Address: '0x68aa8c7873478886bac0700cc80c11e75fe08cb6',
                    Percentage: '1%',
                    Balance: '594,000',
                },
                {
                    Rank: '3',
                    Address: '0x68aa8c7873478886bac0700cc80c11e75fe08cb6',
                    Percentage: '0.356%',
                    Balance: '594,000',
                },
                {
                    Rank: '4',
                    Address: '0x68aa8c7873478886bac0700cc80c11e75fe08cb6',
                    Percentage: '8.8285%',
                    Balance: '594,000',
                },
                {
                    Rank: '5',
                    Address: '0x68aa8c7873478886bac0700cc80c11e75fe08cb6',
                    Percentage: '10.8285%',
                    Balance: '594,000',
                },
            ],
            Orders: [
                {
                    DateTime: '2023-11-18 14:55:35',
                    Method: 'Sale',
                    Amount: '1,000',
                    UnitPrice: "$0.4368",
                    TotalValue: '$ 436.7702',
                    buyer: '0x671ffb2559a4038fd7355b582fa557cd2da2da58',
                    Seller: '0x8a15b729b670068e9f4eef6afd76d29c1494cce6',

                },
                {
                    DateTime: '2023-11-18 14:55:35',
                    Method: 'Sale',
                    Amount: '1,000',
                    UnitPrice: "$0.4368",
                    TotalValue: '$ 436.7702',
                    buyer: '0x671ffb2559a4038fd7355b582fa557cd2da2da58',
                    Seller: '0x8a15b729b670068e9f4eef6afd76d29c1494cce6',

                },
                {
                    DateTime: '2023-11-18 14:55:35',
                    Method: 'Sale',
                    Amount: '1,000',
                    UnitPrice: "$0.4368",
                    TotalValue: '$ 436.7702',
                    buyer: '0x671ffb2559a4038fd7355b582fa557cd2da2da58',
                    Seller: '0x8a15b729b670068e9f4eef6afd76d29c1494cce6',

                },
                {
                    DateTime: '2023-11-18 14:55:35',
                    Method: 'Sale',
                    Amount: '1,000',
                    UnitPrice: "$0.4368",
                    TotalValue: '$ 436.7702',
                    buyer: '0x671ffb2559a4038fd7355b582fa557cd2da2da58',
                    Seller: '0x8a15b729b670068e9f4eef6afd76d29c1494cce6',

                },
                {
                    DateTime: '2023-11-18 14:55:35',
                    Method: 'Sale',
                    Amount: '1,000',
                    UnitPrice: "$0.4368",
                    TotalValue: '$ 436.7702',
                    buyer: '0x671ffb2559a4038fd7355b582fa557cd2da2da58',
                    Seller: '0x8a15b729b670068e9f4eef6afd76d29c1494cce6',

                },
            ],
            activeTab: 'tab1',
            tickname: null
        }
    },
    computed: {
        progress() {
            return this.dataPercentage; // 这里假设数据的百分比直接对应进度条的宽度
        },
        filteredOrders() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.Orders.slice(start, end);
        }
    },
    mounted() {
        const storedtickData = localStorage.getItem('tickname');
        this.tickname = JSON.parse(storedtickData);
        console.log(this.tickname)
    },
    methods: {
        changeTab(tab) {
            this.activeTab = tab;
        },
        gohome() {
            this.$router.go(-1)
        },
        Trade() {
            this.$router.push('/Market');
        },
        dizhi() {

        },
        getProgressWidth(percentage) {
            // 处理百分比数据的方法，比如将 '2.8%' 转换为 '2.8%'
            return percentage; // 直接将 percentage 作为宽度值返回
        },

    }
}

</script>
<style scoped>
.selected-tab {
    background-color: #000;
    color: #fff;
}

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

.tack {
    width: 100%;
}

.tack_one {
    width: 80%;
    margin: 3rem auto;
    display: flex;
    font-family: three;
}

.Teade_two {
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    border-radius: 30px;
    border: 2px rgb(177, 177, 177) solid;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
}

.Teade_two>svg {
    width: 30px;
    height: 30px;
}

.Teade_tree {
    width: 6rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 3px black solid;
    text-align: center;
    margin-left: 1.5rem;
}

.Teade_three {
    display: flex;
    align-items: center;
}

.Teade_four {
    width: 72%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

}

.Teade_five {
    width: 95%;
    height: 0.7rem;
    border-radius: 10px;
    background-color: rgb(69, 114, 253);
}

.over_txt {
    width: 72%;
    margin: 2rem auto;
    border: 2px rgb(177, 177, 177) solid;
    border-radius: 10px;
    box-sizing: border-box;
}

.over_txt1 {
    width: 100%;
    height: 5rem;
    box-sizing: border-box;
    display: flex;
    padding: 1rem;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: rgb(251, 251, 251);
    justify-content: space-between;
    font-family: three;
}

.over_txt3 {
    display: flex;
}

.over_txt4 {
    width: 7rem;
    height: 2.5rem;
    border: 2px black solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-right: 1.5rem;

}

.over_txt5 {
    width: 7rem;
    height: 2.5rem;
    border: 2px black solid;
    display: flex;
    background-color: black;
    align-items: center;
    color: white;
    justify-content: center;
    border-radius: 30px;
}

.over_txt6 {
    width: 100%;
}

.over_txt7 {
    width: 100%;
    display: flex;
    padding-left: 1rem;
    margin: 1rem 0;
    font-family: one;
    /* align-items: center; */
}

.over_txt8 {
    width: 13.5rem;
    line-height: 30px;
}

.over_txt9 {
    color: rgb(69, 114, 253);
    opacity: 0.8;
    cursor: pointer;
}

.over_txt9:hover {
    opacity: 1;
}

.tick_one {
    width: 72%;
    margin: 0 auto;
    border: 2px rgb(177, 177, 177) solid;
    border-radius: 10px;

}

.tick_two {
    width: 100%;
    height: 6rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    box-sizing: border-box;
    padding-left: 1.5rem;
    align-items: center;
}

.tick_three {
    width: 16rem;
    display: flex;
    background-color: rgb(251, 251, 251);
    border-radius: 30px;
    justify-content: space-evenly;
    padding: 0.3rem 0;
}

.tick_three>p {
    padding: 0.7rem 1rem;
    /* background-color: black; */
    border-radius: 30px;
    font-family: three;
    /* color: white; */
}

.tick_four {
    width: 100%;
}

::v-deep .el-table .cell {
    text-align: center;
}

.progress-container {
    width: 100%;
    height: 0.5rem;
    background-color: #f2f2f2;
    margin-bottom: 10px;
    position: relative;
    border-radius: 10px;
}

.progress-bar {
    height: 100%;
    background-color: rgb(69, 114, 254);
    /* 默认蓝色 */
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
}

::v-deep .el-table .cell {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.fenyes {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
}

::v-deep .el-table--enable-row-transition .el-table__body td.el-table__cell {
    height: 5rem;
}

@media (max-width: 600px) {
    .over_txt1 {
        flex-direction: column
    }

    .over_txt3 {
        /* margin: 1rem 0; */

    }

    .over_txt8 {
        width: 10.5rem;
    }

    .over_txt9 {
        word-wrap: break-word;
        /* 当单词太长时，允许单词内换行 */
        white-space: pre-line;
        /* display: none; */
    }

    .Teade_three>h1 {
        font-size: 18px;
    }
    .over_txt{
        width: 100%;
        overflow: hidden;
    }
    .tick_one{
        width: 100%;
    }
}
</style>
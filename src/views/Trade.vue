<template>
    <!-- {{ userData && userData.Tick }} -->
    <div class="Teade">
        <div class="Teade_head">
            <div class="Teade_one">
                <div class="Teade_box">
                    <div class="Teade_two">
                        <svg @click="gohome" t="1700281277119" class="icon" viewBox="0 0 1028 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="12693" width="16" height="16">
                            <path
                                d="M213.659 532.266l211.407 212.056c4.787 4.8 11.165 7.434 17.95 7.434 6.836 0 13.265-2.673 18.102-7.511 9.203-9.219 10.107-23.64 2.165-33.759l-171.945-172.531 502.568 0c14.028 0 25.447-11.469 25.447-25.574s-11.419-25.563-25.447-25.562l-502.555 0 176.107-176.603c5.296-10.54 3.653-22.709-4.253-30.641-4.735-4.735-11.139-7.332-18.038-7.333-7.587 0-14.83 3.055-20.381 8.605l-14.106 14.093-38.712 38.841-7.307 7.178-150.979 151.525c-5.002 5.028-7.537 11.915-7.166 19.4l0.026 0.496-0.025 0.509c-0.369 7.498 2.164 14.386 7.142 19.374l0 0zM213.659 532.266z"
                                fill="#272636" p-id="12694"></path>
                        </svg>
                    </div>
                    <img class="Teade_tour" src="https://www.ierc20.com/assets/ethi-a7ae8328.png">
                    <div class="Teade_three">
                        <h1>{{ userData && userData.Tick }}</h1>
                        <img src="../assets/5.svg">
                    </div>
                </div>
                <div class="Teade_IERC">
                    IERC-20
                </div>
            </div>
            <div class="tal_val">
                <div class="tal_valone">
                    <p class="tal_valthree">Total Vol1,</p>
                    <p class="tal_valtwo"><svg t="1700285298440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13739" width="16" height="16">
                            <path
                                d="M815.8 521.6L512 707.2 208 521.6 512 0l303.8 521.6zM512 766.8L208 581.2 512 1024l304-442.8-304 185.6z"
                                p-id="13740"></path>
                        </svg>1,128.42</p>
                </div>
                <div class="tal_valone">
                    <p class="tal_valthree">Total Vol1,</p>
                    <p class="tal_valtwo"><svg t="1700285298440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13739" width="16" height="16">
                            <path
                                d="M815.8 521.6L512 707.2 208 521.6 512 0l303.8 521.6zM512 766.8L208 581.2 512 1024l304-442.8-304 185.6z"
                                p-id="13740"></path>
                        </svg>1,128.42</p>
                </div>
                <div class="tal_valone">
                    <p class="tal_valthree">Total Vol1,</p>
                    <p class="tal_valtwo"><svg t="1700285298440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13739" width="16" height="16">
                            <path
                                d="M815.8 521.6L512 707.2 208 521.6 512 0l303.8 521.6zM512 766.8L208 581.2 512 1024l304-442.8-304 185.6z"
                                p-id="13740"></path>
                        </svg>1,128.42</p>
                </div>
                <div class="tal_valone">
                    <p class="tal_valthree">Total Vol1,</p>
                    <p class="tal_valtwo"><svg t="1700285298440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13739" width="16" height="16">
                            <path
                                d="M815.8 521.6L512 707.2 208 521.6 512 0l303.8 521.6zM512 766.8L208 581.2 512 1024l304-442.8-304 185.6z"
                                p-id="13740"></path>
                        </svg>1,128.42</p>
                </div>
                <div class="tal_valone">
                    <p class="tal_valthree">Total Vol1,</p>
                    <p class="tal_valtwo"><svg t="1700285298440" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13739" width="16" height="16">
                            <path
                                d="M815.8 521.6L512 707.2 208 521.6 512 0l303.8 521.6zM512 766.8L208 581.2 512 1024l304-442.8-304 185.6z"
                                p-id="13740"></path>
                        </svg>1,128.42</p>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list_one">
                <div class="list_two">
                    <p @click="changeTab('tab1')" :class="{ 'selected-tab': activeTab === 'tab1' }">Listed</p>
                    <p @click="changeTab('tab2')" :class="{ 'selected-tab': activeTab === 'tab2' }">Orders</p>
                    <p @click="changeTab('tab3')" :class="{ 'selected-tab': activeTab === 'tab3' }">My List</p>
                </div>
                <div class="list_three">
                    <svg t="1700286910002" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4072" width="16" height="16">
                        <path
                            d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333z"
                            fill="#ffffff" p-id="4073"></path>
                    </svg>
                    <p>Quick List</p>
                </div>
            </div>
            <div class="tar_nr">
                <div v-show="activeTab === 'tab1'">
                    <div class="tar_nrone">
                        <div class="tar_nrthree">
                            <div class="tar_nrtwo">
                                <svg t="1700288029474" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="1517" width="16" height="16">
                                    <path
                                        d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4C300.2 237.1 337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 91.998 503.8 91.9 508.3 95.5 512 100 512h60c4.4 0 7.9-3.5 8-7.8z m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4C723.8 786.8 687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.802-411.8 0.098-4.5-3.502-8.2-8.002-8.2z"
                                        fill="#2c2c2c" p-id="1518"></path>
                                </svg>
                            </div>
                            <p>Total 293 Listed</p>
                        </div>
                        <p class="tar_nrfour">Price: From Low to High <img src="../assets/6.svg"></p>
                    </div>
                    <div class="tar_nrfive">
                        <div v-for="(item, index) in list" :key="index" class="tar_nrtxt">
                            <p style="  padding:0.5rem  1rem;">
                                {{ userData && userData.Tick }}
                            </p>
                            <div class="tar_nrtxt1">
                                <h2>{{ item.money }}</h2>
                                <p class="tar_nrtxt2">{{ item.Gwei }} GWei/ethi</p>
                                <p class="tar_nrtxt3">${{ item.daole }}</p>
                            </div>
                            <div class="tar_nrtxt4">
                                <div class="tar_nrtxt5">
                                    <img src="../assets/7.svg">
                                    <p>{{ item.bi }}</p>
                                </div>
                                <div class="tar_nrtxt6">
                                    $2,512.41
                                </div>
                            </div>
                            <div class="tar_nrtxt7">
                                <div class="tar_nrtxt8">
                                    <p>Seller</p>
                                    <p>{{ item.dizi.substr(0, 6) +
                                        "...." +
                                        item.dizi.substr(-6) }}</p>
                                </div>
                                <div class="tar_nrtxt9">
                                    <p>Time Left</p>
                                    <p>{{ item.time }}</p>
                                </div>
                            </div>
                            <div class="tar_nrtxt11">
                                <div class="tar_nrtxt10">
                                    Buy
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div v-show="activeTab === 'tab2'">
                    <div class="tar_nrone">
                        <div class="tar_nrthree">
                            <div class="tar_nrtwo">
                                <svg t="1700288029474" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="1517" width="16" height="16">
                                    <path
                                        d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4C300.2 237.1 337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 91.998 503.8 91.9 508.3 95.5 512 100 512h60c4.4 0 7.9-3.5 8-7.8z m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4C723.8 786.8 687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.802-411.8 0.098-4.5-3.502-8.2-8.002-8.2z"
                                        fill="#2c2c2c" p-id="1518"></path>
                                </svg>
                            </div>

                        </div>
                        <p class="tar_nrfour">
                            <el-checkbox v-model="firstInput" :disabled="disableFirstInput" label="All"
                                name="type"></el-checkbox>
                            <el-checkbox label="Sale" name="type"></el-checkbox>
                            <el-checkbox v-model="lastInput" :disabled="disableLastInput" label="Listing"
                                name="type"></el-checkbox>
                        </p>
                    </div>
                    <div class="tar_nrfive">
                        <el-table :data="Orders" style="width: 100%">
                            <el-table-column label="Date Time" >
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
                            <el-table-column label="Amount" >
                                <template v-slot="scope">
                                    {{ scope.row.Amount }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Unit Price" >
                                <template v-slot="scope">
                                    {{ scope.row.UnitPrice }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Total Value" >
                                <template v-slot="scope">
                                    {{ scope.row.TotalValue }}
                                </template>
                            </el-table-column>
                            <el-table-column label="buyer" >
                                <template v-slot="scope">
                                    {{
                                        scope.row.buyer.substr(0, 4) +
                                        "...." +
                                        scope.row.buyer.substr(-4) }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Seller" >
                                <template v-slot="scope">
                                    {{
                                        scope.row.Seller.substr(0, 4) +
                                        "...." +
                                        scope.row.Seller.substr(-4) }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Hash" >
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
                <div v-show="activeTab === 'tab3'">
                    <div class="tar_nrone">
                        <div class="tar_nrthree">
                            <div class="tar_nrtwo">
                                <svg t="1700288029474" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="1517" width="16" height="16">
                                    <path
                                        d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4C300.2 237.1 337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 91.998 503.8 91.9 508.3 95.5 512 100 512h60c4.4 0 7.9-3.5 8-7.8z m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4C723.8 786.8 687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.802-411.8 0.098-4.5-3.502-8.2-8.002-8.2z"
                                        fill="#2c2c2c" p-id="1518"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="Result">
                        <img src="../assets/9.svg">
                        <p>No Result</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
    data() {
        return {
            userData: null,
            Tradename:null,
            activeTab: 'tab1',
            firstInput: '',
            lastInput: '',
            disableFirstInput: true,
            disableLastInput: true,
            currentPage: 1,
            pageSize: 10,
            list: [
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
                },
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
                },
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
                },
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
                },
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
                },
                {
                    money: 6000,
                    Gwei: 21.667,
                    daole: 0.4187,
                    bi: 1.3,
                    dizi: '0x4c05d6a00ada9acac7c6fb777c92bd09307e8571',
                    time: '06:23:13'
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
        }
    },
    methods: {
        changeTab(tab) {
            this.activeTab = tab;
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.currentPage = 1;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        gohome() {
            this.$router.go(-1)
        }
    },
    computed: {
        filteredOrders() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.Orders.slice(start, end);
        }
    },
    mounted() {
        this.disableFirstInput = true;
        this.disableLastInput = true;
        const storedUserData = localStorage.getItem('userName');
        this.userData = JSON.parse(storedUserData);
        const storedTradename = localStorage.getItem('Tradename');
        this.userData = JSON.parse(storedTradename);
        // console.log(this.userData);
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

.Teade {
    width: 100%;
    height: auto;
}

.Teade_head {
    width: 100%;
    height: 18rem;
    background: linear-gradient(135deg, rgb(246, 246, 246) 50%, rgb(227, 227, 227) 50%);
}

.Teade_one {
    width: 75%;
    height: 8rem;
    margin: 0 auto;
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between
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

.Teade_three {
    display: flex;
    margin-left: 1.5rem;
    align-items: center
}

.Teade_three>h1 {
    font-family: one;
    font-weight: 900;
    transition: color 0.3s;
    color: rgb(69, 113, 243);
    line-height: 30px;

}

.Teade_three>h1:hover {
    color: rgb(100, 178, 245);
    border-bottom: 3px rgb(69, 113, 243) solid;
}

.Teade_three>img {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
}

.Teade_box {
    display: flex;
    align-items: center;
}

.Teade_tour {
    width: 96px;
    height: 96px;
    border-radius: 10px;
}

.Teade_IERC {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 3px black solid;
    text-align: center;
    font-family: 900;
    font-family: three;
}

.tal_val {
    width: 75%;
    margin: 1rem auto;
    /* border: 1px black solid; */
    display: flex;
    justify-content: space-between;
}

.tal_valone {
    width: 18%;
    border: 2px rgb(177, 177, 177) solid;
    border-radius: 10px;
    text-align: center;
    font-family: one;
    background-color: white;
}

.tal_valtwo {
    padding: 0.7rem 0 0.7rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.tal_valtwo>svg {
    margin-right: 0.5rem;
}

.tal_valthree {
    color: rgb(157, 157, 157);
    padding: 0.7rem 0 0 0;
}

.list {
    width: 100%;
    height: auto;
}

.list {
    width: 100%;
    margin-top: 2rem;
}

.list_one {
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.list_two {
    width: 18rem;
    height: 3.5rem;
    display: flex;
    background-color: rgb(246, 246, 246);
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    /* color: white; */
    font-family: three;
}

.list_two>p {
    /* background-color: black; */
    padding: 0.7rem 1rem;
    height: 1rem;
    border-radius: 30px;
    display: flex;
    align-items: center
}

.list_three {
    width: 8rem;
    height: 3rem;
    display: flex;
    background-color: rgb(69, 113, 243);
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: two;
    font-weight: 900;
}

.list_three svg {
    width: 20px;
    height: 20px;
}

.tar_nr {
    width: 75%;
    margin: 1.5rem auto;
    border: 2px rgb(177, 177, 177) solid;
    border-radius: 15px;
    box-sizing: border-box;
}

.tar_nrone {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: three;
    background-color: rgb(251, 251, 251);
    border-radius: 15px;
}

.tar_nrtwo {
    width: 40px;
    height: 40px;
    background-color: rgb(231, 240, 236);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
}

.tar_nrthree {
    /* width: 100%; */
    display: flex;
    align-items: center
}

.tar_nrfour {
    display: flex;
    align-items: center;
}

.tar_nrfour>img {
    width: 20px;
}

.tar_nrfive {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    font-family: three;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}

.tar_nrtxt {
    width: 18.5%;
    /* height: 6rem; */
    /* box-sizing: border-box; */
    border-radius: 10px;
    margin-bottom: 1rem;
    border: 3px black solid;
    background-color: rgb(243, 243, 243);
}

.tar_nrtxt1 {
    text-align: center;
    padding: 0rem 0;

}

.tar_nrtxt1>h2 {
    margin-top: 1rem;
}

.tar_nrtxt2 {
    padding: 0.5rem 0 0 0;
}

.tar_nrtxt3 {
    padding: 0.5rem 0 1rem 0;
}

.tar_nrtxt4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    background-color: #000;
    color: white;
}

.tar_nrtxt5 {
    display: flex;
}

.tar_nrtxt5>img {
    margin-right: 0.5rem;
}

.tar_nrtxt5>p {
    font-weight: 900;
}

.tar_nrtxt6 {
    font-size: 14px;
}

.tar_nrtxt7 {
    width: 100%;
    display: flex;
    font-family: one;
    font-size: 14px;
    padding: 0.3rem 0 1.5rem 0;
}

.tar_nrtxt8 {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
}

.tar_nrtxt8>p:nth-child(2):hover {
    border-bottom: 1px black solid;
    line-height: 16px;
}

.tar_nrtxt9 {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
}

.tar_nrtxt10 {
    width: 90%;
    height: 2rem;
    border: 3px black solid;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tar_nrtxt10:hover {
    background-color: #000;
    color: #fff;
}

.tar_nrtxt11 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}

::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #000;
    border: 1px black solid;
}

::v-deep .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000;
}

::v-deep .el-table .cell {
    text-align: center;
    line-height: 40px;
}

.tar_nrfive {
    width: 100%;
}

::v-deep .el-table .cell {
    display: flex;
    justify-content: center
}

.fenyes {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.Result {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 8rem 0;
    flex-direction: column;
    align-items: center;
}

.Result>img {
    width: 130px;
    height: 130px;

}

@media (max-width: 600px) {
    .Teade_one {
        width: 100%;
        display: flex;
        align-items: normal;
        flex-direction: column;
    }

    .Teade_IERC {
        margin-top: 1rem;
    }

    .Teade_head {
        /* height: 20rem; */
        height: auto;
    }

    .tal_val {
        width: 100%;
        /* margin: 3rem auto; */
        padding-top: 3rem;
        margin: 0 auto;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .tal_valone {
        width: 45%;
    }
    .list_one{
        width: 100%;
        justify-content: space-between;
    flex-direction: column;
    align-items: center;
    }
    .list_three{
        margin-top: 2rem;
    }
    .tar_nr{
        width: 100%;
    }
    .tar_nrtxt{
        width: 100%;
    }
}
</style>
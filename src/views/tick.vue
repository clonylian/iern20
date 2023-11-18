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
                <h1>ethi</h1>
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
                    <div class="over_txt5">
                        Trade
                    </div>
                </div>
            </div>
            <div class="over_txt6">
                <div class="over_txt7">
                    <p class="over_txt8">Supply</p>
                    <p>21,000,000</p>
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
                    <p class="over_txt9">
                        0xb3a6c05c1b795b08c9ed936478a244529eda20c0
                        <img src="../assets/8.svg">
                    </p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Deploy Time</p>
                    <p>
                        2023-07-01 17:13:47</p>
                </div>
                <div class="over_txt7">
                    <p class="over_txt8">Holders</p>
                    <p>
                        4,048</p>
                </div>
                <div class="over_txt7" style="margin-bottom: 2rem;">
                    <p class="over_txt8">Total Transactions</p>
                    <p>

                        39,714</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>


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
.over_txt9:hover{
    opacity: 1;
}

</style>
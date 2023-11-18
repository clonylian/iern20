<template>
    <div class="market">
        <div class="market_one">
            <img src="https://www.ierc20.com/assets/bg-2cef7049.png">
        </div>
        <div class="market_two">
            <h2>Inscribe</h2>
            <div class="market_three">
                <h3>You can deploy IERC-20 tokens below.</h3>
                <div class="content_four">
                    <p class="cont_fp" @click="changeTabx('tab1')" :class="{ 'selected-tab': activeTabx === 'tab1' }">
                        IERC-20</p>
                    <p class="cont_fp1" @click="changeTabx('tab2')" :class="{ 'selected-tab': activeTabx === 'tab2' }">
                        Ethscriptions</p>
                </div>
                <div class="Deploy">
                    Deploy
                </div>
                <div v-show="activeTabx === 'tab1'">
                    <div class="maek_input">
                        <p>Tick</p>
                        <div class="maek_inputx" :style="{ border: inputValid ? '' : '1px solid red' }">
                            <input v-model="input" placeholder="Enter the tick">
                        </div>
                    </div>
                    <div class="maek_input">
                        <p>Total Supply </p>
                        <div class="maek_inputx" :style="{ border: input1Valid ? '' : '1px solid red' }">
                            <input v-model="input1" placeholder="21000000">
                        </div>
                    </div>
                    <div class="maek_input">
                        <p>Limit Per Mint </p>
                        <div class="maek_inputx" :style="{ border: input2Valid ? '' : '1px solid red' }">
                            <input v-model="input2" placeholder="1000">
                        </div>
                    </div>
                    <div class="maek_input">
                        <p>Mint Limit Per Address</p>
                        <div class="maek_inputx" :style="{ border: input3Valid ? '' : '1px solid red' }">
                            <input v-model="input3" placeholder="10">
                        </div>
                    </div>
                    <div class="Deploys" :class="{ 'deploy-button': deployValid }" @click="deploy">
                        Deploy
                    </div>
                </div>
                <div v-show="activeTabx === 'tab2'">
                    <div class="maek_input">
                        <p>Tick</p>
                        <div class="maek_inputx">
                            <input v-model="input4" placeholder="Enter the tick">
                        </div>
                    </div>
                    <div class="maek_input">
                        <p>Total Supply </p>
                        <div class="maek_inputx">
                            <input v-model="input5" placeholder="21000000">
                        </div>
                    </div>
                    <div class="maek_input">
                        <p>Limit Per Mint <svg t="1700217352122" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="17189" width="16" height="16">
                                <path
                                    d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z"
                                    fill="#2c2c2c" p-id="17190"></path>
                                <path
                                    d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"
                                    fill="#2c2c2c" p-id="17191"></path>
                                <path
                                    d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z"
                                    fill="#2c2c2c" p-id="17192"></path>
                            </svg></p>
                        <div class="maek_inputx">
                            <input v-model="input6" placeholder="1000">
                        </div>
                    </div>
                    <div class="Deploys">
                        Deploy
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
            activeTabx: 'tab1',
            input: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            inputValid: true,
            input1Valid: true,
            input2Valid: true,
            input3Valid: true,
            deployValid: false
        }
    },
    methods: {
        changeTabx(tab) {
            this.activeTabx = tab;
        },
        deploy() {
            if (this.input && this.input1 && this.input2 && this.input3) {
                // 执行Deploy的操作
                console.log(111)
            }
        }
    },
    watch: {
        input(value) {

            this.inputValid = (value !== '')
        },
        input1(value) {
            // 根据需要验证输入的值是否正确
            this.input1Valid = (value !== '')
        },
        input2(value) {
            // 根据需要验证输入的值是否正确
            this.input2Valid = (value !== '')
        },
        input3(value) {
            // 根据需要验证输入的值是否正确
            this.input3Valid = (value !== '')
        },
        inputValid(value) {
            // 根据需要判断所有输入是否都正确'
            console.log(this.deployValid = (this.inputValid && this.input1Valid && this.input2Valid && this.input3Valid))

        }
    }
}
</script>
<style>
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
.deploy-button {
    background-color: black;
    color: white;
}

.market {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: one;
}

.market_one {
    width: 30%;
    height: 100%;
}

.market_one>img {
    width: 100%;
    height: 100%;
}

.market_two {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.market_two>h2 {
    margin: 3rem 0;
}

.selected-tab {
    background-color: #000;
    color: #fff;
}

.market_three {
    width: 60%;
    border: 2px rgb(177, 177, 177) solid;
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-direction: column;
    border-radius: 15px;

}

.market_three>h3 {
    text-align: center;
    margin-bottom: 3rem;
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

.Deploy {
    width: 96%;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);
    margin: 2rem auto;
}

.maek_input {
    width: 95%;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.maek_input>p {
    font-size: 18px;
    font-weight: 900;

}

.maek_inputx {
    width: 340px;
    display: flex;
    border-radius: 10px;
    height: 50px;
    border: 2px rgb(177, 177, 177) solid;
}

.maek_inputx>input {
    width: 90%;
    margin-left: 1rem;
    border: none;
    outline: none;
}

.Deploys {
    width: 90%;
    height: 3rem;
    border-radius: 30px;
    background-color: rgb(234, 234, 234);
    margin: 0 auto;
    text-align: center;
    line-height: 3rem;
}
</style>
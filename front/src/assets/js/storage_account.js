/**
 * 账户数据
 */

import Storage from './storage';

export default class AccountStorage extends Storage {
    ACCOUNTDATA = [{
        type: 'local',
        name: 'viewed'
    },
    {
        type: 'local',
        name: 'captcha'
    },
    {
        type: 'local',
        name: 'language'
    },
    {
        type: 'local',
        name: 'search.history'
    },
    {
        type: 'local',
        name: 'theme'
    },
    {
        type: 'local',
        name: 'user.subscribes'
    },
    {
        type: 'local',
        name: 'user.configuration'
    },
    {
        type: 'session',
        name: 'captcha'
    },
    {
        type: 'session',
        name: 'business'
    }];

    NAME = 'user.configuration';

    // 清除数据
    clearAll () {
        this.ACCOUNTDATA.forEach(i => {
            switch (i.type) {
                case 'session':
                    super.session().rem(super.STORAGENAME + i.name);
                    break;
                case 'local':
                    super.local().rem(super.STORAGENAME + i.name);
                    break;
            }
        })
    }

    /**
     * 用户一类 本地配置
     * - 是否本地语言同步
     * - 判决提示
     * @param key
     * @param value
     * @constructor
     */
    updateConfiguration (key, value) {
        let data = super.get(this.NAME);

        if (data.code < 0) {
            data = { data: { value: {} } }
        }

        data.data.value[key] = value;
        super.set(this.NAME , data.data.value)
    }

    /**
     * 取得attr的值
     * @param key
     * @returns {*|boolean}
     */
    getConfiguration (key) {
        let data = super.get(this.NAME);
        return key in data.data.value ? data.data.value[key] : false;
    }
}
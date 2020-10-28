import assign from 'object.assign'

(() => {
    if (!Array.from) {
        Array.from = (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
            };
        
            // The length property of the from method is 1.
            return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;
        
            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);
        
            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }
        
            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                throw new TypeError('Array.from: when provided, the second argument must be a function');
                }
        
                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                T = arguments[2];
                }
            }
        
            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);
        
            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
        
            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
            };
        }());
    }
    
    const applyDefaults = (defaults, options) => {
        for (var k in defaults) {
            if (options && !options.hasOwnProperty(k)) {
                options[k] = defaults[k];
            }
        }
        return options;
    }
    
    const ajax = (path, success, error) => {
        if ( window.XMLHttpRequest ) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success) {
                            success(xhr.responseText);
                        }
                    } else {
                        if (error) {
                            error(xhr);
                        }
                    }
                }
            };
    
            xhr.open("GET", path, true);
            xhr.send(null);
        } else {
            console.log( 'window.XMLHttpRequest is not supported' )
        }
    }
    
    // element.addAttr('attrname', 'attrvalue')
    Element.prototype.addAttr = function(attribute, thisValue) {
        if (typeof thisValue === 'number' || 'boolean')  thisValue = thisValue.toString();
        
        var c = this.getAttribute(attribute),
            attr, attr_l,
            add_value, add_value_l,
            c_new = '',
            space;
    
        if (!c || c.length === 0) {
            this.setAttribute(attribute, thisValue)
        } else {
    
            attr = c.split(' ');
            attr_l = attr.length;
            add_value = thisValue.split(' ');
            add_value_l = add_value.length;
    
            for (var i = 0; i < attr_l; i++) {
                for (var a = 0; a < add_value_l; a++) {
                    if (attr[i] === add_value[a]) {
                        return
                    }
                }
            }
    
            attr = attr.concat(add_value);
            attr_l = attr.length;
    
            for (var i = 0; i < attr_l; i++) {
                space = ' ';
                if (i === attr_l - 1) space = '';
                c_new += attr[i] + space;
            }
    
            this.setAttribute(attribute, '');
            if (c_new) this.setAttribute(attribute, c_new)
        }
    
        return this;
    }
    
    // element.rmAttr('attrname', 'attrvalue attrvalue2 attrvalue3')
    Element.prototype.rmAttr = function(attribute, thisValue) {
        var c = this.getAttribute(attribute),
            attr, attr_l,
            rm_value, rm_value_l,
            c_new = '',
            space;
        if (c) {
            if (!thisValue) {
                this.removeAttribute(attribute);
            } else {
                attr = c.split(' ');
                attr_l = attr.length;
                rm_value = thisValue.split(' ');
                rm_value_l = rm_value.length;
    
                for (var i = 0; i < attr_l; i++) {
                    for (var a = 0; a < rm_value_l; a++) {
                        if (attr[i] === rm_value[a]) {
                            attr.splice(i, 1);
                        }
                    }
                }
    
                attr_l = attr.length;
                for (var i = 0; i < attr_l; i++) {
                    space = ' ';
                    if (i === attr_l - 1) space = '';
                    c_new += attr[i] + space;
                }
    
                this.setAttribute(attribute, '');
                if (c_new) this.setAttribute(attribute, c_new)
            }
        }
    
        return this;
    }
    
    // element.addClass('classvalue')
    Element.prototype.addClass = function(thisValue) {
        this.addAttr('class', thisValue);
        return this;
    }
    
    // element.rmClass('classvalue')
    Element.prototype.rmClass = function(thisValue) {
        this.rmAttr('class', thisValue);
        return this;
    }
    
    const fireConsentApp = (consentFields) => {
        const consent_container = document.getElementById('ppms_consent_container')
        if (!consent_container) return
    
        const show_detailed = document.getElementById('ppms_show_detailed')
        const hide_detailed = document.getElementById('ppms_hide_detailed')
        const detailed_settings = document.getElementById('ppms_detailed_settings')
        const agree_all = document.getElementById('ppms_agree_all')
        const reject_all = document.getElementById('ppms_reject_all')
        const save_choices = document.getElementById('ppms_save_choices')
        const privacy_consent_link = document.getElementById('ppms_consent_link')
        const consent_error = document.getElementById('ppms_consent_error')
        const refresh_page = document.getElementById('ppms_refresh_page')
        const names_list = document.getElementById('ppms_consent_fields_name_list').children[0].children
        const hide_message = document.getElementById('ppms_hide_message')
    
        refresh_page.onclick = () => {
            window.location.href = window.location.href
        }
    
        const clickActions = () => {
            show_detailed.addEventListener('click', () => {
                show_detailed.addClass('ppms_hide')
                hide_detailed.rmClass('ppms_hide')
                detailed_settings.rmClass('ppms_hide')
            })
    
            hide_detailed.addEventListener('click', () => {
                show_detailed.rmClass('ppms_hide')
                hide_detailed.addClass('ppms_hide')
                detailed_settings.addClass('ppms_hide')
            })
        }
        clickActions()
    
        class ConsentPopup {
            constructor(props) {
                this.ppms = ppms
                this.getPPMSsettings = this.getPPMSsettings.bind(this)
                this.displayConsents = this.displayConsents.bind(this)
                this.updateConsents = this.updateConsents.bind(this)
                this.confirmConsents = this.confirmConsents.bind(this)
    
                this.setState = this.setState.bind(this)
                this.render = this.render.bind(this)
    
                this.state = {
                    existingConsents: undefined,
                    createdConsents: undefined,
                    privacySettings: undefined,
                    updatedConsents: { consents: {} }
                }
            }
    
            setState(props) {
                assign(this.state, props);
                this.render()
            }
    
            getPPMSsettings() {
                this.ppms.cm.api('getComplianceTypes', (types) => {
                        if (typeof types !== 'string')
                        this.setState({ existingConsents: types })
                    }, (err) => {
                        // console.log( `existing consents error: ${err}` )
                    }
                )
    
                this.ppms.cm.api('getNewComplianceTypes', (types) => {
                    if (typeof types !== 'string' && types.length > 0) {
                        ppms.cm.api('setInitialComplianceSettings', types, () => {}, (e) => {})
                        this.setState({ createdConsents: types })
                    }
                }, (err) => {
                    // console.log( `created consents error: ${err}` )
                })
    
                this.ppms.cm.api('getComplianceSettings', (settings) => {
                    if (typeof settings !== 'string') {
                        consent_error.rmClass('ppms_active') // hide error
                        this.setState({ privacySettings: settings })
                    }
                }, (err) => {
                    consent_error.addClass('ppms_active') // display error
                    // console.log( `receive settings error: ${err}` )
                })
            }
    
            componentDidMount() {
                this.getPPMSsettings()
                this.render()
            }
    
            confirmConsents(setData) {
                this.ppms.cm.api('setComplianceSettings', setData, (settings) => {
                    consent_container.rmClass('ppms_active')
                    consent_error.rmClass('ppms_active')
                }, (err) => {
                    consent_container.addClass('ppms_active')
                    consent_error.addClass('ppms_active')
                })
            }   
    
            displayConsents() {
                const { createdConsents, existingConsents, privacySettings, updatedConsents } = this.state
                
                let arr = [];
    
                if ( !existingConsents || !privacySettings ) return arr
    
                if (createdConsents && createdConsents.length > 0) consent_container.addClass('ppms_active')
    
                existingConsents.map( key => {
                    consentFields.map( elem => {
                        if ( elem.getAttribute('data-key') === key ) {
    
                            elem.addClass('ppms_visible');
                            [...names_list].map( li => {
                                if (li.getAttribute('data-key') === key) {
                                    li.addClass('ppms_visible')
                                }
                            })
    
                            if (updatedConsents.consents[key]) {
                                let updateConsent = updatedConsents.consents[key];

                                if ( updateConsent && typeof updateConsent.status !== 'undefined' ) {
                                    elem.setAttribute('status', updateConsent && updateConsent.status == -1 ? 0 : updateConsent.status)
                                    if (updateConsent && updateConsent.status == -1) consent_container.addClass('ppms_active')
                                }

                            } else {
                                let privacyConsent = privacySettings.consents[key];

                                if ( privacyConsent && typeof privacyConsent.status !== 'undefined' ) {
                                    elem.setAttribute('status', privacyConsent && privacyConsent.status == -1 ? 0 : privacyConsent.status)
                                    if (privacyConsent && privacyConsent.status == -1) consent_container.addClass('ppms_active')
                
                                    updatedConsents.consents[key] = { status: parseInt( elem.getAttribute('status') ) }
                                }

                            }
                            
                            arr.push(elem)
                        }
                    })
                })
    
                return arr
            }
    
            updateConsents(_options) {
                const { privacySettings, updatedConsents } = this.state
                
                let defaults = { key: false, all: false },
                    options = applyDefaults(defaults, _options);
    
                const key = options.key
                const all = options.all
    
                let consents = assign({}, updatedConsents);
    
                if (key) {
                    let status;
                    if (updatedConsents && updatedConsents.consents[key]) {
                        status = updatedConsents.consents[key].status
                    } else {
                        status = privacySettings.consents[key] ? privacySettings.consents[key].status : 0
                    }
    
                    status = status == 1 ? 0 : 1
                    consents.consents[`${key}`] = { status };
    
                } else if (all) {
                    for (let k in consents.consents) {
                        consents.consents[`${k}`].status = 1;
                    }
    
                    this.confirmConsents(consents)
                } else if (!all) {
                    for (let k in consents.consents) {
                        consents.consents[`${k}`].status = 0;
                    }
    
                    this.confirmConsents(consents)
                }
    
                this.setState( { updatedConsents: consents } );
            }
    
            render() {
                const { updatedConsents } = this.state
                
                agree_all.onclick = () => {
                    this.updateConsents({ all: true })
                }
                reject_all.onclick = () => {
                    this.updateConsents({ all: false })
                }
                hide_message.onclick = function () {
                    consent_container.rmClass('ppms_active')
                }
                save_choices.onclick = () => {
                    this.confirmConsents(updatedConsents)
                }
                
                // open consent popup in privacy settings
                if (privacy_consent_link) {
                    privacy_consent_link.addEventListener('click', () => {
                        consent_container.addClass('ppms_active')
                        show_detailed.click()
                    })
                }
    
                this.displayConsents().map(( elem ) => {
                    elem.onclick = () => this.updateConsents({ key: elem.getAttribute('data-key') })
                    
                    if ( elem.getAttribute('status') == 1 ) {
                        elem.querySelector('.ppms_consent_switcher').addClass('ppms_checked')
                    } else {
                        elem.querySelector('.ppms_consent_switcher').rmClass('ppms_checked')
                    }
                })
    
            }
        }
    
        if (!consent_container) return
        if (typeof ppms == 'object') {
            const consentPopup = new ConsentPopup(consentFields);
            consentPopup.componentDidMount()
            return
        } 
    }
    
    const consentManagerAPI = (url) => {
        window.addEventListener("load", () => { 
            if ( typeof( sevenTag ) == 'object' ) {
                if (url) {
                    ajax( url, (data) => {
                        let element = document.createElement('div')
                        element.innerHTML = data
                
                        if (sevenTag.privacy && sevenTag.privacy.enabled) {
                            document.body.appendChild( element.children[0] )
                            const consentFields = document.getElementById('ppms_consent-fields').children;
                            fireConsentApp( [...consentFields] )
                        }
                    },
                
                    (err) => {
                        console.log(err)
                    })
                } else {
                    if (sevenTag.privacy && sevenTag.privacy.enabled) {
                        const consentFields = document.getElementById('ppms_consent-fields').children;
                        fireConsentApp( [...consentFields] )
                    }
                }
            }
        })
    }
    
    consentManagerAPI(ppms_consenturl)
})()
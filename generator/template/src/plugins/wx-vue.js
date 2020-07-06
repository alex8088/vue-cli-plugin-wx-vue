import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import 'wx-vue/lib/styles/index.css'
import Wx from 'wx-vue'
<%_ if (options.customTheme) { _%>
import '../styles/wx-theme.css'
<%_ } _%>

Vue.use(Wx)
<%_ } else { _%>
import { Button } from 'wx-vue'
<%_ if (options.customTheme) { _%>
import '../styles/wx-theme.css'
<%_ } _%>

Vue.use(Button)
<%_ } _%>
<template>
    <div>
        <div class="container navbar navbar-expand-lg navbar-light">
            
            <router-link  to="/" ><img src="/asset/img/icon-96.png" class="logo"></router-link>
            <div class="pull-right">
                <ul class="navbar-nav mr-auto word_upper">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Home" >Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   href="javascript:;" id="navbarDropdown" >DropMenu</a>
                        <div class="dropdown-menu startup-service-pop pop-up-row   text-center" ref="startup_service_pop">
                            <div >
                                <div class="mask"></div>
                                <div class="items-wrapper"> 
                                        <router-link class="nav-link item item1" to="/" >
 
                                            <span class="product-name word_upper">dropdown_menu_1</span>

                                        </router-link>

                                        <router-link class="nav-link item item2"   to="/" >

                                            <span class="product-name word_upper">dropdown_menu_2</span>

                                        </router-link>






                                 </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/about" >about</router-link>
                    </li>


                </ul>
            </div>
        </div>

    </div>



</template>



<style>


</style>

<script>



export default {
  data(){
    return {

    }
  },


  computed: {
  },
  methods: {

  },
  watch:{

  },
  components: {},
  created () {

    
  }
}
</script>
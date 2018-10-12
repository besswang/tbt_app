<template>
  <div class="tab1">
    <ul class="timeline-ul">
      <li class="timeline-li">
        <div class="dot">
          <i class="dot-inner"></i>
        </div>
        <div class="dot-tail"></div>
        <div class="timeline-content">
          <p class="">2018.06.18</p>
          <h4 class="">1.5版本上线</h4>
        </div>
      </li>
      <li class="timeline-li">
        <div class="dot">
          <i class="dot-inner"></i>
        </div>
        <div class="dot-tail"></div>
        <div class="timeline-content">
          <p class="">2018.06.18</p>
          <h4 class="">1.4版本上线</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Tab1',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
  .timeline-ul{
    padding-left:60px;
    margin-top:40px;
  }
  .timeline-li{
    position:relative;
  }
  .dot{
    background-color: #fff;
    border:2px solid #224dff;
    width: 10px;
    height: 10px;
    left: 1px;
    top: 4px;
    position: absolute;
    content: '';
    z-index: 98;
    border-radius: 99px;
  }
  .dot-inner{
    display:block;
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: #224dff;
    width:6px;
    height:6px;
    content: '';
    z-index: 99;
    border-radius: 99px;
  }
  .dot-tail{
    position: absolute;
    content: '';
    height: 100%;
    width: 2px;
    left: 7px;
    top: 5px;
    background-color: #e5e5e5;
  }
  .timeline-content{
    padding: 0 0 1.5rem 1.2rem;
  }
  .timeline-content>p{
    color: #888;
    font-size: 0.8rem;
  }
  .timeline-content>h4{
    color: #666;
    font-weight: normal;
    padding:15px 0;
  }
</style>

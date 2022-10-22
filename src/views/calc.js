import React from 'react'

import { Helmet } from 'react-helmet'

import './calc.css'

const Calc = (props) => {
  return (
    <div className="calc-container">
      <Helmet>
        <title>calc - Taqueria Calculator</title>
        <meta property="og:title" content="calc - Taqueria Calculator" />
      </Helmet>
      <div className="calc-container1"></div>
    </div>
    <div class="calconic-calculator"  data-calculatorid="6353b751ec5be5002a99b951"></div>
<script>
  (function() { var qs,j,q,s,d=document, gi=d.getElementById,
  ce=d.createElement, gt=d.getElementsByTagName,
  id="calconic_", b="https://cdn.calconic.com/static/js/";
  if(!gi.call(d,id)) { j=ce.call(d,"script"); j.id=id; j.type="text/javascript"; j.async=true;
  j.dataset.calconic=true;
  j.src=b+"calconic.min.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(j,q) }
})();
</script>
  )
}

export default Calc

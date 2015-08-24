var TopPot = function(storeLoc, minCustPerHour, maxCustPerHour,
  avgDonutsPerHour, hoursOpen) {
  this.storeLoc = storeLoc;
  this.minimum = minCustPerHour;
  this.maximum = maxCustPerHour;
  this.average = avgDonutsPerHour;
  this.hours = hoursOpen;

  this.donutsPerHour = function() {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1)+
      this.minimum) * this.average;
  };
  this.donutsPerDay = function() {
    return Math.floor(this.donutsPerHour() * this.hours);
  };
};

var DonutMaster = function() {
  this.storeList = [];
  this.addStore = function(storeLoc, minCustPerHour, maxCustPerHour,
    avgDonutsPerHour, hoursOpen) {
      var newStore = new TopPot(storeLoc, minCustPerHour,
        maxCustPerHour, avgDonutsPerHour, hoursOpen);
      this.storeList.push(newStore);
    };
  this.generateReport = function() {
    this.donutsCount = [];
    for (var index = 0; index < this.storeList.length; index++) {
      this.donutsCount.push(this.storeList[index].storeLoc,
        this.storeList[index].donutsPerHour().toFixed(2),
        this.storeList[index].donutsPerDay().toFixed(2),
        this.storeList[index].hours);
    }
  };
};

var dm = new DonutMaster();

dm.addStore('Downtown', 8, 43, 4.5, 12);
dm.addStore('Capitol Hill', 4, 37, 2, 11);
dm.addStore('South Lake Union', 9, 23, 6.33, 11);
dm.addStore('Wedgewood', 2, 28, 1.25, 10);
dm.addStore('Ballard', 8, 58, 3.75, 10);
dm.addStore('Pike Market', 9, 55, 5, 12);
dm.generateReport();

$(function(){
  $('#Downtown').html(dm.donutsCount[0]);
  $('#d1').html(dm.donutsCount[1]);
  $('#d2').html(dm.donutsCount[2]);
  $('#d3').html(dm.donutsCount[3]);
  $('#Capitol').html(dm.donutsCount[4]);
  $('#c1').html(dm.donutsCount[5]);
  $('#c2').html(dm.donutsCount[6]);
  $('#c3').html(dm.donutsCount[7]);
  $('#South').html(dm.donutsCount[8]);
  $('#s1').html(dm.donutsCount[9]);
  $('#s2').html(dm.donutsCount[10]);
  $('#s3').html(dm.donutsCount[11]);
  $('#Wedgewood').html(dm.donutsCount[12]);
  $('#w1').html(dm.donutsCount[13]);
  $('#w2').html(dm.donutsCount[14]);
  $('#w3').html(dm.donutsCount[15]);
  $('#Ballard').html(dm.donutsCount[16]);
  $('#b1').html(dm.donutsCount[17]);
  $('#b2').html(dm.donutsCount[18]);
  $('#b3').html(dm.donutsCount[19]);
  $('#Pike').html(dm.donutsCount[20]);
  $('#p1').html(dm.donutsCount[21]);
  $('#p2').html(dm.donutsCount[22]);
  $('#p3').html(dm.donutsCount[23]);

  $('.down').hide();
  $('.d1').click(function(){
    $('.down').toggle();
  });
  $('.cap').hide();
  $('.c1').click(function(){
    $('.cap').toggle();
  });
  $('.south').hide();
  $('.s1').click(function(){
    $('.south').toggle();
  });
  $('.wedge').hide();
  $('.w1').click(function(){
    $(".wedge").toggle();
  });
  $('.ballard').hide();
  $('.b1').click(function(){
    $('.ballard').toggle();
  });
  $('.pike').hide();
  $('.p1').click(function(){
    $('.pike').toggle();
  });

  $('.downr').hide();
  $('.d1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[0] + ' store sells ' + dm.donutsCount[1] +
      ' donuts per hour and ' + dm.donutsCount[2] + ' per day.');
    $('.downr').show('slow');
  }, function () {
    $('.downr').hide('slow');
    });
  $('.capr').hide();
  $('.c1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[4] + ' store sells ' + dm.donutsCount[5] +
      ' donuts per hour and ' + dm.donutsCount[6] + ' per day.');
    $('.capr').show('slow');
  }, function () {
    $('.capr').hide('slow');
    });
  $('.southr').hide();
  $('.s1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[8] + ' store sells ' + dm.donutsCount[9] +
      ' donuts per hour and ' + dm.donutsCount[10] + ' per day.');
    $('.southr').show('slow');
  }, function () {
    $('.southr').hide('slow');
    });
  $('.wedger').hide();
  $('.w1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[12] + ' store sells ' + dm.donutsCount[13] +
      ' donuts per hour and ' + dm.donutsCount[14] + ' per day.');
    $('.wedger').show('slow');
  }, function () {
    $('.wedger').hide('slow');
    });
  $('.ballardr').hide();
  $('.b1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[16] + ' store sells ' + dm.donutsCount[17] +
      ' donuts per hour and ' + dm.donutsCount[18] + ' per day.');
    $('.ballardr').show('slow');
  }, function () {
    $('.ballardr').hide('slow');
    });
  $('.piker').hide();
  $('.p1r').hover(function(){
    $('div').html('The ' + dm.donutsCount[20] + ' store sells ' + dm.donutsCount[21] +
      ' donuts per hour and ' + dm.donutsCount[22] + ' per day.');
    $('.piker').show('slow');
  }, function () {
    $('.piker').hide('slow');
    });
});

/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');


Promise.all([

    Scene.root.findFirst('TimerText'),

]).then(function (results) {

    const timerCountText = results[0];

    Patches.outputs.getScalar('Timer').then(timerObj => {

        timerObj.monitor().subscribe(function (timerEvent) {

            timerCountText.text = timerEvent.newValue.toFixed(2).toString();

        });

    });


});


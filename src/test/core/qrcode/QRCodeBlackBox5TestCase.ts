/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*package com.google.zxing.qrcode;*/

import 'mocha'
import * as assert from 'assert'

import BarcodeFormat from './../../../core/BarcodeFormat'
import MultiFormatReader from './../../../core/MultiFormatReader'
import AbstractBlackBoxTestCase from './../common/AbstractBlackBoxTestCase'

/**
 * Some very difficult exposure conditions including self-shadowing, which happens a lot when
 * pointing down at a barcode (i.e. the phone's shadow falls across part of the image).
 * The global histogram gets about 5/15, where the local one gets 15/15.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
export default class QRCodeBlackBox5TestCase extends AbstractBlackBoxTestCase {

  public constructor() {
    super("src/test/core/resources/blackbox/qrcode-5", new MultiFormatReader(), BarcodeFormat.QR_CODE)
    this.addTest(19, 19, 0.0)
    this.addTest(19, 19, 90.0)
    this.addTest(19, 19, 180.0)
    this.addTest(18, 18, 270.0)
  }

}

describe("QRCodeBlackBox5TestCase", () => {
  it("testBlackBox", (done) => {
    const test = new QRCodeBlackBox5TestCase()
    test.testBlackBox(() => {
      done()
    })
  })
})
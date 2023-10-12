import React from "react";
import '../App.css'
import MyChart from "./graph";

const Home = () => {

    return (
        <>
            <div id="home-content" class="a">
                <div class="div">
                    <div class="rectangle"></div>
                    <div class="group">
                        <img class="realassistai-logo" src="logo.png" alt="logo"/>
                        <div class="rectangle-2"></div>
                        <p class="text-wrapper">123 Main Street, Dover, NH 03820-4667</p>
                    </div>
                    <p class="realassist-property">
                        <span class="span">RealAssist Property Report | Page 1 </span> <span class="text-wrapper-2">of 25</span>
                    </p>
                    <p class="p">Report Genereted on September 26, 2023</p>
                    <div class="overlap">
                        <div class="rectangle-3"></div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-group">
                                <div class="text-wrapper-3">Location Information</div>
                            </div>
                        </div>
                        <div class="group-2">
                            <div class="group-3">
                                <div class="text-wrapper-4">Census Tract</div>
                                <div class="text-wrapper-5">081200</div>
                            </div>
                            <div class="group-4">
                                <div class="text-wrapper-4">Carrier Route</div>
                                <div class="text-wrapper-6">C011</div>
                            </div>
                            <div class="group-5">
                                <div class="text-wrapper-4">Assessor&#39;s Parcel Number (APN)</div>
                                <div class="text-wrapper-7">Dovr M:l0095 B: L:1p000</div>
                            </div>
                        </div>
                        <div class="group-6">
                            <div class="text-wrapper-4">Alternate APN</div>
                            <div class="text-wrapper-8">-</div>
                        </div>
                        <div class="group-7">
                            <div class="text-wrapper-4">Tax Account Number</div>
                            <div class="text-wrapper-8">-</div>
                        </div>
                        <div class="group-8">
                            <div class="rectangle-4"></div>
                            <div class="group-wrapper">
                                <div class="div-wrapper">
                                    <div class="group-9">
                                        <div class="group-10">
                                            <p class="text-wrapper-9">Only Focus on Crime Graph</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlap-2">
                        <div class="overlap-wrapper">
                            <div class="overlap-group">
                                <div class="text-wrapper-3">Location Information</div>
                            </div>
                        </div>
                        <div class="rectangle-5"></div>
                        <div class="overlap-wrapper">
                            <div class="overlap-group">
                                <div class="text-wrapper-3">Appliances</div>
                            </div>
                        </div>
                        <div class="group-11">
                            <img class="indir" src="img/indir-11-1.svg" alt="svg" />
                            <p class="text-wrapper-10">There is no data currently available</p>
                        </div>
                        <div class="group-12">
                            <div class="rectangle-6"></div>
                            <div class="overlap-3">
                                <div class="group-13">
                                    <div class="group-14">
                                        <div className="group-15">
                                            <p className="text-wrapper-9">Only Focus on Crime Graph</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlap-4">
                        <div class="group-16">
                            <div class="overlap-5">
                                <div class="group-17">
                                    <div class="text-wrapper-4">Median Household Income</div>
                                    <div class="text-wrapper-11">$82,464</div>
                                </div>
                                <div class="group-18">
                                    <div class="text-wrapper-4">Median Non-Family Household Income</div>
                                    <div class="text-wrapper-11">$52,990</div>
                                </div>
                                <div class="group-19">
                                    <p class="text-wrapper-4">Age 18-64 Years Below Poverty Level</p>
                                    <div class="text-wrapper-12">9.30%</div>
                                </div>
                                <div class="group-20">
                                    <div class="text-wrapper-4">Median Family Income</div>
                                    <div class="text-wrapper-13">$115,513</div>
                                </div>
                                <div class="group-21">
                                    <div class="text-wrapper-4">Percent Below Poverty Level</div>
                                    <div class="text-wrapper-14">8.00%</div>
                                </div>
                                <div class="group-22">
                                    <p class="text-wrapper-4">Age 65 Years+ Below Poverty Level</p>
                                    <div class="text-wrapper-14">4.90%</div>
                                </div>
                                <div class="group-23">
                                    <div class="text-wrapper-4">Median Married-Couple Family Income</div>
                                    <div class="text-wrapper-15">$128,024</div>
                                </div>
                                <div class="group-24">
                                    <p class="text-wrapper-4">Age 18 Years &amp; Younger Below Poverty Level</p>
                                    <div class="text-wrapper-14">5.90%</div>
                                </div>
                            </div>
                            <div class="overlap-group-wrapper">
                                <div class="overlap-group">
                                    <div class="text-wrapper-3">Income</div>
                                </div>
                            </div>
                        </div>
                        <div class="group-25">
                            <div class="rectangle-7"></div>
                            <div class="overlap-6">
                                <div class="group-26">
                                    <div class="group-27">
                                        <div class="group-10">
                                            <p class="text-wrapper-9">Only Focus on Crime Graph</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-28">
                        <div class="overlap-7">
                            <div class="rectangle-8"></div>
                            <div class="frame">
                                <img class="huge-icon-navigation" src="radar.png" alt="radar"/>
                                <div class="text-wrapper-16">Crime</div>
                            </div>
                        </div>
                    </div>
                    <div class="group-29">
                        <div class="overlap-8">
                            <div class="rectangle-9"></div>
                            <div class="group-30">
                                <div class="overlap-group-2">
                                    <div class="text-wrapper-3">Burglary</div>
                                </div>
                                <div class="text-wrapper-17">Arrests</div>
                            </div>
                            <div class="rectangle-10"></div>
                            <div class="group-31">
                                <MyChart />

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;

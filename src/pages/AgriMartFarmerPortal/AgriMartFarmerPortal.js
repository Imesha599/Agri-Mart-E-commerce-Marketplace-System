import React from "react";
import AgriMartFarmerNavBar from "../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar";
import "./AgriMartFarmerPortal.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
function AgriMartFarmerPortal() {
  return (
    <div>
      <div>
        <AgriMartFarmerNavBar />
      </div>

      <div>
        <h2 class="txt-header">Welcome to Farmer Portal</h2>
      </div>
      <div>
        <div class="container px-5">
          <div class="row mt-4">
            <div class="col-sm-6">
              <div class="card my-card has-background-gradient-teal">
                <div class="my-auto px-4">
                  <div class="row">
                    <div class="col-10 mt-5">
                      <p class="mb-1" style={{ fontSize: "20px" }}>
                        Total Income
                      </p>
                      <h2>4654456.00 LKR</h2>
                    </div>
                    <div class="col-1">
                      <i
                        class="bi bi-bar-chart-fill"
                        style={{ fontSize: "100px", marginLeft: "40px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card my-card has-background-gradient-blue">
                <div class="my-auto px-4">
                  <div class="row">
                    <div class="col-10 mt-5">
                      <p class="mb-1" style={{ fontSize: "20px" }}>
                        Last Month Income
                      </p>
                      <h2>46646.00 LKR</h2>
                    </div>
                    <div class="col-1">
                      <i
                        class="bi bi-arrow-up-right"
                        style={{ fontSize: "100px", marginLeft: "60px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card my-card has-background-gradient-green">
                <div class="my-auto px-4">
                  <div class="row">
                    <div class="col-10 mt-5">
                      <p class="mb-1" style={{ fontSize: "20px" }}>
                        Pending Oders
                      </p>
                      <h2>5</h2>
                    </div>
                    <div class="col-1">
                      <i
                        style={{ fontSize: "100px", marginLeft: "80px" }}
                        class="bi bi-exclamation-lg"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card my-card has-background-gradient-orange">
                <div class="my-auto px-4">
                  <div class="row">
                    <div class="col-10 mt-5">
                      <p class="mb-1" style={{ fontSize: "20px" }}>
                        Cancelled Orders
                      </p>
                      <h2>5</h2>
                    </div>
                    <div class="col-1">
                      <i
                        style={{ fontSize: "100px", marginLeft: "100px" }}
                        class="bi bi-x-lg"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <AgriMartFooter />
      </div>
    </div>
  );
}
export default AgriMartFarmerPortal;
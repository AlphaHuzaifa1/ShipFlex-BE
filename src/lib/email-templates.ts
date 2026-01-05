const generateEmailLayout = (content: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <style>
        .footer {
          margin-top: 20px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #f8f9fa;
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }
        .content {
          padding: 30px 20px;
          background-color: #ffffff;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #ddd;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }
      </style>
      <body>
        <div class="container">
          <div class="header">
            <div style="text-align: center; margin-bottom: 32px">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 952 215"
                width="350"
                height="79">
                <title>Shipflex</title>
                <style>
                  tspan {
                    white-space: pre;
                  }
                  .s0 {
                    fill: #353535;
                  }
                  .s1 {
                    fill: #735ae5;
                  }
                </style>
                <g id="Layer 2">
                  <g id="&lt;Group&gt;">
                    <g id="&lt;Group&gt;">
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s0"
                        d="m182.3 160q-11.7-4.8-18.7-14.2-7-9.4-7.4-22.6h35q0.7 7.4 5.2 11.4 4.4 3.9 11.5 3.9 7.3 0 11.5-3.3 4.2-3.4 4.2-9.4 0-4.9-3.3-8.2-3.4-3.3-8.3-5.4-4.9-2.1-13.9-4.8-13.1-4-21.3-8.1-8.3-4-14.2-11.9-6-7.8-6-20.5 0-18.8 13.6-29.5 13.7-10.7 35.6-10.7 22.3 0 35.9 10.7 13.6 10.7 14.6 29.7h-35.5q-0.4-6.6-4.8-10.3-4.5-3.8-11.4-3.8-5.9 0-9.6 3.2-3.6 3.2-3.6 9.1 0 6.6 6.1 10.2 6.2 3.7 19.2 7.9 13.1 4.4 21.2 8.4 8.2 4.1 14.2 11.8 5.9 7.6 5.9 19.7 0 11.6-5.8 21-5.9 9.4-17 15-11.2 5.5-26.4 5.5-14.7 0-26.5-4.8z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s0"
                        d="m373.6 67.4q11.2 12.2 11.2 33.5v62.6h-32.7v-58.2q0-10.8-5.5-16.7-5.6-6-15-6-9.4 0-15 6-5.6 5.9-5.6 16.7v58.2h-32.8v-142.1h32.8v49.3q5-7.1 13.7-11.3 8.6-4.2 19.4-4.2 18.4 0 29.5 12.2z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s0"
                        d="m410 40.1q-5.4-5.1-5.4-12.6 0-7.7 5.4-12.8 5.5-5.1 14.2-5.1 8.4 0 13.9 5.1 5.5 5.1 5.5 12.8 0 7.5-5.5 12.6-5.5 5.1-13.9 5.1-8.7 0-14.2-5.1zm30.5 16.2v107.2h-32.9v-107.2z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        fill-rule="evenodd"
                        class="s0"
                        d="m510.4 59.4q8.5-4.6 19.8-4.6 13.2 0 24 6.7 10.8 6.7 17 19.2 6.2 12.5 6.2 29 0 16.5-6.2 29.1-6.2 12.6-17 19.4-10.8 6.8-24 6.8-11.2 0-19.7-4.6-8.5-4.6-13.3-11.9v66.1h-32.9v-158.3h32.9v15.2q4.7-7.5 13.2-12.1zm26.8 31q-6.8-7-16.8-7-9.8 0-16.6 7.1-6.8 7.1-6.8 19.4 0 12.3 6.8 19.4 6.8 7.1 16.6 7.1 9.8 0 16.7-7.2 6.9-7.2 6.9-19.5 0-12.3-6.8-19.3z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s1"
                        d="m648.5 83.6h-17.7v79.9h-32.8v-79.9h-11.9v-27.3h11.9v-3.1q0-19.7 11.3-30 11.4-10.3 33.3-10.3 3.6 0 5.3 0.2v27.8q-9.4-0.5-13.2 2.7-3.9 3.3-3.9 11.8v0.9h17.7z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s1"
                        d="m696.7 21.4v142.1h-32.8v-142.1z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        fill-rule="evenodd"
                        class="s1"
                        d="m821 117.8h-74.3q0.7 10 6.4 15.2 5.7 5.3 13.9 5.3 12.3 0 17.1-10.3h35q-2.7 10.5-9.7 19-7 8.4-17.6 13.2-10.6 4.8-23.6 4.8-15.8 0-28.1-6.7-12.3-6.7-19.2-19.2-6.9-12.5-6.9-29.2 0-16.7 6.8-29.2 6.8-12.5 19.1-19.2 12.3-6.7 28.3-6.7 15.5 0 27.6 6.5 12.1 6.5 18.9 18.6 6.9 12.1 6.9 28.3 0 4.6-0.6 9.6zm-33.1-18.3q0-8.4-5.7-13.4-5.8-5-14.4-5-8.3 0-13.9 4.8-5.7 4.8-7.1 13.6z" />
                      <path
                        id="&lt;Compound Path&gt;"
                        class="s1"
                        d="m902.2 163.5l-20.5-29.8-17.3 29.8h-35.5l35.3-54.8-36.3-52.4h36.9l20.5 29.6 17.3-29.6h35.6l-36 54 36.9 53.2z" />
                    </g>
                    <g id="&lt;Group&gt;"></g>
                    <g id="&lt;Group&gt;"></g>
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <g id="&lt;Group&gt;">
                          <path
                            id="&lt;Compound Path&gt;"
                            fill-rule="evenodd"
                            class="s0"
                            d="m133.9 126.3c0 2-0.7 3.1-2.4 4.1-13.3 7.6-26.7 15.3-40 23q-8.6 5-17.3 10.1h-1.6c-0.1-0.1-0.2-0.2-0.3-0.3-19-11-38-22-57.1-32.9-1.7-1-2.3-2.1-2.3-4q0.1-32.3 0-64.6c0-1.8 0.6-2.9 2.2-3.8 13.6-7.8 27.1-15.6 40.7-23.5 5.6-3.2 11.2-6.5 16.8-9.8h1.6c0.1 0.1 0.1 0.2 0.2 0.2q28.6 16.6 57.3 33.1c1.5 0.9 2.2 1.9 2.2 3.7q-0.1 32.3 0 64.7zm-90.3-78.6c0.6 0.4 1 0.6 1.4 0.8 17 9.9 34.1 19.7 51.1 29.5 1.9 1.1 2.6 2.3 2.6 4.4-0.1 6.1-0.1 12.2-0.1 18.3 0 0.5 0.1 1 0.1 1.6 0.4-0.2 0.6-0.3 0.9-0.4q4-2.3 8.1-4.7 4.1-2.4 8.2-4.8c0.5-0.3 0.8-1.1 0.8-1.6 0.1-6.9 0.1-13.7 0.1-20.5 0-0.9-0.2-1.4-1-1.8q-26.6-15.3-53.2-30.7c-0.7-0.4-1.2-0.4-1.9 0-2.6 1.5-5.2 3-7.8 4.5q-0.4 0.3-0.9 0.5c-2.7 1.6-5.5 3.2-8.4 4.9zm84.9 54.2q0-4.6 0-9.1c0-0.4-0.1-0.8-0.1-1.3-0.5 0.3-0.9 0.5-1.2 0.7q-25 14.4-50 28.8c-4.2 2.4-3.5 2.3-7.6 0-5.3-3-10.5-6.1-15.9-9.2-0.1 0.4-0.1 0.6-0.1 0.7q0 5 0 10 0 4.6 0 9.3c0 0.5 0.5 1.1 1 1.4 5.9 3.4 11.9 6.8 17.8 10.3 0.8 0.5 1.3 0.5 2.1 0q26.5-15.3 53-30.6c0.7-0.4 1-0.9 1-1.7q0-4.6 0-9.3zm-101.5-37.3c5.4-3.1 10.8-6.2 16.2-9.3 0.4-0.3 0.8-0.5 1.3-0.8-1.9-1.1-3.6-2.1-5.2-3.1-0.8-0.5-1.4-0.5-2.2 0q-8.8 5.1-17.6 10.1c-0.9 0.6-1.2 1.1-1.2 2.2q0.1 21 0 42 0 9.5 0.1 18.9c0 0.5 0 1.3 0.4 1.5 1.8 1.1 3.7 2.2 5.9 3.4v-2c0-19.6 0-39.2-0.1-58.8 0-1.9 0.7-3.2 2.4-4.1zm23.2 13.7c5.5-3.1 11-6.3 16.4-9.4q0.6-0.4 1.2-0.8c-0.1-0.2-0.2-0.3-0.2-0.3q-4.6-2.6-9.1-5.3-4-2.2-8-4.5c-0.3-0.2-1-0.1-1.4 0.1-6 3.4-12 7-18.1 10.4-0.7 0.4-1 0.9-1 1.7q0.1 30.7 0 61.3c0 0.9 0.3 1.3 1.1 1.7 2.6 1.5 5.2 3 7.8 4.5q0.5 0.3 1.1 0.7c2.6 1.5 5.3 3 8.2 4.7v-1.9q0-29.7 0-59.4c0-1.6 0.6-2.7 2-3.5zm3.4 26c-0.1 0.9 0.2 1.4 1 1.9q8.9 5 17.7 10.2c0.8 0.4 1.4 0.5 2.2 0q8.8-5.1 17.7-10.2c0.8-0.4 1.1-0.9 1.1-1.8q-0.1-10.3 0-20.6c0-0.9-0.3-1.4-1.1-1.8q-8.9-5.1-17.8-10.3c-0.7-0.4-1.2-0.5-1.9 0q-9 5.2-18 10.3c-0.7 0.4-1 0.9-0.9 1.7 0 3.5 0 6.9 0 10.3 0 3.5 0 6.9 0 10.3zm74.9 14.3c-0.6 0.3-1.1 0.5-1.5 0.8q-25.8 14.9-51.6 29.8c-1.4 0.8-2.6 0.8-4 0-5.5-3.3-10.9-6.4-16.4-9.5-0.4-0.3-0.9-0.5-1.4-0.7 0 2.3-0.1 4.4 0 6.5 0 0.4 0.4 0.9 0.8 1.1q9.1 5.4 18.3 10.6c0.4 0.2 1.1 0.2 1.5 0 2.2-1.2 4.3-2.5 6.5-3.7q23.3-13.5 46.6-27c0.5-0.3 1.1-0.9 1.1-1.4 0.2-2.1 0.1-4.2 0.1-6.5zm0-55c0-1.1-0.4-1.6-1.2-2.1q-12.8-7.3-25.6-14.7-13.6-7.9-27.2-15.7c-0.5-0.3-1.2-0.5-1.6-0.3-1.9 1-3.7 2.1-5.8 3.3 0.5 0.3 0.8 0.5 1 0.7 17.2 9.9 34.4 19.8 51.6 29.7 1.7 1 2.5 2.1 2.5 4.1-0.1 6.2 0 12.4 0 18.6 0 0.4 0 0.9 0 1.6 1.8-1 3.4-2 5-2.8 0.9-0.5 1.3-1.1 1.3-2.2q-0.1-10.1 0-20.2z" />
                        </g>
                      </g>
                      <g id="&lt;Group&gt;">
                        <g id="&lt;Group&gt;">
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m128.5 111.2c0 0.8-0.3 1.3-1 1.7q-26.5 15.3-53 30.6c-0.8 0.5-1.3 0.5-2.1 0-5.9-3.5-11.9-6.9-17.8-10.3-0.5-0.3-1-0.9-1-1.4q0-4.7 0-9.3l18.8 10.7c0.6 0.4 1.4 0.4 2.1 0l54-31.3q0 4.7 0 9.3z" />
                        </g>
                        <g id="&lt;Group&gt;">
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m58.5 62.5l-18.7 11.3c-0.6 0.4-0.9 1.1-0.9 1.8v62.1c-2.6-1.5-5.2-3-7.8-4.5-0.8-0.4-1.1-0.8-1.1-1.7q0.1-30.6 0-61.3c0-0.8 0.3-1.3 1-1.7 6.1-3.4 12.1-7 18.1-10.4 0.4-0.2 1.1-0.3 1.4-0.1q4 2.3 8 4.5z" />
                        </g>
                        <g id="&lt;Group&gt;">
                          <path
                            id="&lt;Path&gt;"
                            class="s1"
                            d="m116.8 70.3c0 6.8 0 13.6-0.1 20.5 0 0.5-0.3 1.3-0.8 1.6q-4.1 2.4-8.2 4.8v-21.8c0-0.8-0.4-1.4-1-1.8l-53.8-31.3c2.6-1.5 5.2-3 7.8-4.5 0.7-0.4 1.2-0.4 1.9 0q26.6 15.4 53.2 30.7c0.8 0.4 1 0.9 1 1.8z" />
                        </g>
                      </g>
                      <g id="&lt;Group&gt;"></g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="content">${content}</div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ShipFlex. All rights reserved.</p>
            <p>If you have any questions, please contact support.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const getRegistrationEmailBody = (name: string, otp: number): string => {
  const content = `
    <h2>Welcome to ShipFlex, ${name}!</h2>
    <p>We are thrilled to have you on board. Your account has been successfully created.</p>
    <p>Get started by exploring our platform and setting up your preferences.</p>
    <p>Use the following OTP to verify your email: ${otp}</p>
  `;
  return generateEmailLayout(content);
};

export const getForgotPasswordEmailBody = (resetLink: string): string => {
  const content = `
    <h2>Password Reset Request</h2>
    <p>We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <a href="${resetLink}" class="button">Reset Password</a>
    <p>Or copy and paste this link into your browser:</p>
    <p><a href="${resetLink}">${resetLink}</a></p>
    <p>This link will expire in 1 hour.</p>
  `;
  return generateEmailLayout(content);
};

export const getResetPasswordEmailBody = (): string => {
  const content = `
    <h2>Password Changed Successfully</h2>
    <p>Your password has been successfully updated.</p>
    <p>If you did not perform this action, please contact our support team immediately.</p>
    <a href="${process.env.FRONTEND_BASE_URL}/login" class="button">Login Now</a>
  `;
  return generateEmailLayout(content);
};

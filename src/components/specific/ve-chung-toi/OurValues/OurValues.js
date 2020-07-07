import React from "react";
import styles from "./OurValues.module.scss";

import WidthConstraint from "../../../reusable/WidthConstraint/WitdhConstraint";

const OurValues = () => {
  return (
    <div className={styles.wrapper}>
      <WidthConstraint maxWidth="laptop">
        <h2>Giá Trị Cốt Lõi</h2>
        <ul>
          <li>
            <h4>Uy Tín</h4>
            <p>Tạo niềm tin và sự uy tín đối với khách hàng</p>
          </li>
          <li>
            <h4>Trung Thực</h4>
            <p>
              Luôn suy nghĩ và hành động một cách trung thực vì lợi ích khách
              hàng.
            </p>
          </li>
          <li>
            <h4>Chất Lượng</h4>
            <p>
              Cung cấp những sản phẩm, dịch vụ có chất lượng tốt nhất với tính
              chuyên nghiệp cao.
            </p>
          </li>
          <li>
            <h4>Quan Tâm</h4>
            <p>
              Tạo một môi trường làm việc tốt nhất mà ở đó mọi người đều làm
              việc hăng say, được đối xử công bằng, được tôn trọng và được quan
              tâm đến mọi mặt trong đời sống.
            </p>
          </li>
          <li>
            <h4>Minh Bạch</h4>
            <p>
              Đối với cổ đông, duy trì sự phát triển của công ty theo hướng bền
              vững, quản lý công ty minh bạch và sử dụng nguồn vốn hiệu quả.
            </p>
          </li>
          <li>
            <h4>Bình Đẳng</h4>
            <p>
              Sẵn sàng hợp tác với đối tác trong và ngoài nước trên nguyên tắc
              bình đẳng, trung thực, đôi bên cùng có lợi.
            </p>
          </li>
          <li>
            <h4>Phát Triển Bền Vững</h4>
            <p>
              Phấn đấu xây dựng một doanh nghiệp hoạt động hiệu quả và phát
              triển bền vững.
            </p>
          </li>
        </ul>
      </WidthConstraint>
    </div>
  );
};

export default OurValues;

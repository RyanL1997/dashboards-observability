/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React, { useState, useCallback } from 'react';
import { EuiSmallButtonIcon, EuiContextMenuPanel, EuiContextMenuItem, EuiPopover } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';

interface PlotlyEditorActionsMenuProps {
  formatHJson(): void;
}

function PlotlyEditorActionsMenu({ formatHJson }: PlotlyEditorActionsMenuProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onButtonClick = useCallback(() => setIsPopoverOpen((isOpen) => !isOpen), []);
  const onHJsonCLick = useCallback(() => {
    formatHJson();
    setIsPopoverOpen(false);
  }, [formatHJson]);

  const closePopover = useCallback(() => setIsPopoverOpen(false), []);

  const button = <EuiSmallButtonIcon iconType="wrench" onClick={onButtonClick} />;

  const items = [
    <EuiContextMenuItem key="hjson" onClick={onHJsonCLick}>
      <FormattedMessage
        id="visTypeVega.editor.reformatAsHJSONButtonLabel"
        defaultMessage="Reformat as HJSON"
      />
    </EuiContextMenuItem>,
  ];

  return (
    <EuiPopover
      id="actionsMenu"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft"
    >
      <EuiContextMenuPanel items={items} />
    </EuiPopover>
  );
}

export { PlotlyEditorActionsMenu };
